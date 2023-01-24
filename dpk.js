const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "O";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    candidate =
      event.partitionKey || createCandidateHash(JSON.stringify(event));
  }

  candidate = candidate
    ? typeof candidate === "string"
      ? candidate
      : (candidate = JSON.stringify(candidate))
    : TRIVIAL_PARTITION_KEY;

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? createCandidateHash(candidate)
    : candidate;
};

const createCandidateHash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};
