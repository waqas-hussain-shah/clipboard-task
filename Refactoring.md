# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. The constants TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH are moved to the top of the code and are clearly labeled, making it clear what their values are and that they are not expected to change.
2. The logic for getting the partition key from the event object and generating the partition key from the data string are extracted into separate functions, making it clear what the function is doing and also making it more testable.
3. The code uses ternary operator instead of multiple if conditions, making it more concise and easier to read.
4. The variable and function names are more self-explanatory and make it clear what the function is doing and what each variable represents
5. The function is also using the latest language features like arrow function and ternary operator which are more readable.
