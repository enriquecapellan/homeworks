const exercises = [
	{
		id: "1",
		name: "Length of String",
		description:
			"Create a function that takes in a string and returns the length of the string.",
		func: strLength,
		funcName: "strLength",
		types: ["string"],
		examples: [
			{ input: "hello", output: 5 },
			{ input: "test", output: 4 },
			{ input: "JavaScript", output: 10 },
			{ input: "1234567890", output: 10 },
			{ input: "This is a test.", output: 15 },
			{ input: "", output: 0 }
		],
		tests: [
			{
				params: [""],
				expected: 0
			},
			{
				params: ["a"],
				expected: 1
			},
			{
				params: ["hello"],
				expected: 5
			},
			{
				params: ["hello world today"],
				expected: 17
			},
			{
				params: [
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				],
				expected: 123
			},
			{
				params: ["Hello, World!"],
				expected: 13
			}
		]
	},
	{
		id: "2",
		name: "Factorial",
		description:
			"Create a function that takes in a number and returns its factorial.",
		func: factorial,
		funcName: "factorial",
		types: ["number"],
		examples: [
			{ input: 5, output: 120 },
			{ input: 3, output: 6 },
			{ input: 7, output: 5040 }
		],
		tests: [
			{ params: [0], expected: 1 },
			{ params: [1], expected: 1 },
			{ params: [5], expected: 120 },
			{ params: [7], expected: 5040 },
			{ params: [10], expected: 3628800 }
		]
	},
	{
		id: "3",
		name: "Even or Odd",
		description:
			"Create a function that takes in a number and returns true if it's even, and false if it's odd.",
		func: evenOrOdd,
		funcName: "evenOrOdd",
		types: ["number"],
		examples: [
			{ input: 2, output: true },
			{ input: 3, output: false },
			{ input: 0, output: true }
		],
		tests: [
			{
				params: [2],
				expected: true
			},
			{
				params: [3],
				expected: false
			},
			{
				params: [0],
				expected: true
			},
			{
				params: [-2],
				expected: true
			},
			{
				params: [-3],
				expected: false
			}
		]
	},
	{
		id: "4",
		name: "String Repeater",
		description:
			"Create a function that takes in a string and a number, and returns a new string that repeats the original string the specified number of times.",
		func: stringRepeater,
		funcName: "stringRepeater",
		types: ["string", "number"],
		examples: [
			{ input: ["hello", 3], output: "hellohellohello" },
			{ input: ["test", 2], output: "testtest" },
			{
				input: ["JavaScript", 5],
				output: "JavaScriptJavaScriptJavaScriptJavaScriptJavaScript"
			}
		],
		tests: [
			{
				params: ["", 5],
				expected: ""
			},
			{
				params: ["a", 3],
				expected: "aaa"
			},
			{
				params: ["hello", 2],
				expected: "hellohello"
			},
			{
				params: ["hello world ", 3],
				expected: "hello world hello world hello world "
			}
		]
	},
	{
		id: "5",
		name: "FizzBuzz",
		description:
			"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.",
		func: fizzBuzz,
		funcName: "fizzBuzz",
		types: ["number"],
		examples: [
			{ input: 15, output: "FizzBuzz" },
			{ input: 3, output: "Fizz" },
			{ input: 5, output: "Buzz" }
		],
		tests: [
			{
				params: [1],
				expected: "1"
			},
			{
				params: [3],
				expected: "Fizz"
			},
			{
				params: [5],
				expected: "Buzz"
			},
			{
				params: [15],
				expected: "FizzBuzz"
			},
			{
				params: [30],
				expected: "FizzBuzz"
			}
		]
	},
	{
		id: "7",
		name: "Remove Vowels",
		description:
			"Create a function that takes in a string and returns a new string with all of the vowels removed.",
		func: removeVowels,
		funcName: "removeVowels",
		types: ["string"],
		examples: [
			{ input: "hello world", output: "hll wrld" },
			{ input: "javascript is fun", output: "jvscrpt s fn" },
			{ input: "testing 1 2 3", output: "tstng 1 2 3" }
		],
		tests: [
			{
				params: ["hello"],
				expected: "hll"
			},
			{
				params: ["JavaScript"],
				expected: "JvScrpt"
			},
			{
				params: ["testing"],
				expected: "tstng"
			},
			{
				params: ["aeiou"],
				expected: ""
			},
			{
				params: ["The quick brown fox jumps over the lazy dog"],
				expected: "Th qck brwn fx jmps vr th lzy dg"
			}
		]
	},
	{
		id: "8",
		name: "Is Prime Number",
		description:
			"Create a function that takes in a number and returns true if the number is prime and false otherwise.",
		func: isPrime,
		funcName: "isPrime",
		types: ["number"],
		examples: [
			{ input: 2, output: true },
			{ input: 3, output: true },
			{ input: 4, output: false },
			{ input: 5, output: true },
			{ input: 7, output: true }
		],
		tests: [
			{
				params: [1],
				expected: false
			},
			{
				params: [2],
				expected: true
			},
			{
				params: [3],
				expected: true
			},
			{
				params: [5],
				expected: true
			},
			{
				params: [6],
				expected: false
			},
			{
				params: [11],
				expected: true
			},
			{
				params: [25],
				expected: false
			},
			{
				params: [41],
				expected: true
			},
			{
				params: [101],
				expected: true
			},
			{
				params: [121],
				expected: false
			}
		]
	},
	{
		id: "10",
		name: "Count the letter 'a'",
		description:
			"Create a function that takes in a string and returns the number of times the letter 'a' appears in the string.",
		func: countA,
		funcName: "countA",
		types: ["string"],
		examples: [
			{ input: "banana", output: 3 },
			{ input: "alphabet", output: 1 },
			{ input: "amazing", output: 2 }
		],
		tests: [
			{
				params: [""],
				expected: 0
			},
			{
				params: ["a"],
				expected: 1
			},
			{
				params: ["banana"],
				expected: 3
			},
			{
				params: ["apple"],
				expected: 1
			},
			{
				params: ["The quick brown fox jumps over the lazy dog"],
				expected: 1
			}
		]
	}
];
