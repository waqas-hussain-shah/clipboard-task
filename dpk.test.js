const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return a string of the correct length", () => {
    const event = { partitionKey: "test" };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("test");
  });

  it("should return a sha3-512 hash of the data if partitionKey is not present", () => {
    const event = { data: { name: "John", age: 30 } };
    const result = deterministicPartitionKey(event);
    console.log(result);
    const expected = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(result).toEqual(expected);
  });

  it("should return TRIVIAL_PARTITION_KEY if event is not present", () => {
    const result = deterministicPartitionKey();
    expect(result).toEqual("O");
  });
});