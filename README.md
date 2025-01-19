# Type 'string[]' is not assignable to type 'string'
This TypeScript code demonstrates a common type error: assigning an array of strings to a variable expecting a single string.
The `greeter` function expects a single string, but the `user` variable is an array of strings.  This leads to a type error.
The solution involves either modifying the `greeter` function to handle arrays or changing `user` to hold a single string.