// ========================================
// AI Programming Quiz - Complete (178 questions from PDF)
// ========================================

const quizData = {
    mcq: [
        // Page 1 - Questions 1 to 7
        { id: 1, question: "Why has Python become the certain language of choice for AI and machine learning?", options: ["It is the fastest programming language", "It requires no programming knowledge", "It combines simplicity with a rich AI ecosystem and widespread industry adoption", "It can only be used for AI applications"], correct: 2, explanation: "Python's simplicity and rich libraries (NumPy, scikit-learn, TensorFlow) make it the top choice for AI." },
        { id: 2, question: "What does it mean that Python supports 'dynamic typing'?", options: ["Variables must be declared with their type before use", "Types cannot change once assigned", "Types can change at run-time", "Python only supports one data type"], correct: 2, explanation: "Dynamic typing allows a variable to refer to different data types during execution." },
        { id: 3, question: "Which of the following is NOT a characteristic of Python?", options: ["Multi-paradigm support", "Automatic memory management", "Requires semicolons at the end of each statement", "Extendable core language"], correct: 2, explanation: "Python uses newlines to end statements; semicolons are optional but not required." },
        { id: 4, question: "What is the correct way to write a single-line comment in Python?", options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "'This is a comment"], correct: 2, explanation: "The hash (#) symbol marks the start of a comment." },
        { id: 5, question: "Which of the following statements about Python syntax is TRUE?", options: ["Python is case-insensitive", "The end of a command must be marked with a semicolon", "Python is particular about whitespace and indentation", "Indentation is optional for readability"], correct: 2, explanation: "Indentation defines code blocks and is syntactically significant." },
        { id: 6, question: "How would you write a multi-line comment in Python?", options: ["/* This is a multi-line comment */", "<- This is a multi-line comment ->", "\"\"\"This is a multi-line comment\"\"\"", "# This is a multi-line comment #"], correct: 2, explanation: "Python does not have a dedicated multi-line comment; using \" on each line is the standard way." },
        { id: 7, question: "According to Python conventions, how many spaces should be used for indentation within a block?", options: ["2 spaces", "4 spaces", "8 spaces", "2 tab"], correct: 1, explanation: "PEP 8 recommends 4 spaces per indentation level." },
        // Page 2 - Q8 to Q14
        { id: 8, question: "What will be the output of the following code? val = 5; val = 'Hello'; print(val)", options: ["5", "Hello", "Error: cannot change type", "5Hello"], correct: 1, explanation: "The variable val is reassigned to the string 'Hello'." },
        { id: 9, question: "Which of the following is a valid variable name in Python?", options: ["2ndPlace", "my-variable", "my_variable", "my variable"], correct: 2, explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a digit or contain hyphens/spaces." },
        { id: 10, question: "What is a reserved word in Python?", options: ["A word that must be used for variable names", "A word with special meaning in the language that cannot be used as a variable name", "A word that is reserved for comments", "A word that automatically creates a variable"], correct: 1, explanation: "Reserved words (keywords) have special meaning and cannot be used as identifiers." },
        { id: 11, question: "Which of the following is NOT a valid Boolean value in Python?", options: ["True", "False", "true"], correct: 2, explanation: "Only `True` and `False` (capitalized) are Boolean values; `true` is a variable name, not a Boolean literal." },
        { id: 12, question: "What is the result of 9 % 4 in Python?", options: ["2.25", "2", "1", "36"], correct: 2, explanation: "The modulo operator returns the remainder: 9 divided by 4 leaves remainder 1." },
        { id: 13, question: "According to operator precedence in Python, which operation is performed first?", options: ["Addition and subtraction", "Multiplication and division", "Exponents", "Expressions in parentheses"], correct: 3, explanation: "Exponentiation (**) has the highest precedence, then multiplication/division, then addition/subtraction." },
        { id: 14, question: "What is the result of 5**2 in Python?", options: ["7", "10", "25", "52"], correct: 2, explanation: "** is exponentiation: 5 squared = 25." },
        // Page 3 - Q15 to Q22
        { id: 15, question: "What will the following expression evaluate to? 2*3+5", options: ["16", "11", "13", "10"], correct: 1, explanation: "Multiplication before addition: 2*3=6, 6+5=11." },
        { id: 16, question: "How would you correctly create a string that contains a single quote in Python?", options: ["storeName = 'Joe's Store'", "storeName = \"Joe's Store\"", "storeName = 'Joe\\'s Store'", "Both B and C are correct"], correct: 3, explanation: "Double quotes or escaping the single quote both work." },
        { id: 17, question: "Given str = 'Hello', what does str[-1] return?", options: ["H", "e", "l", "o"], correct: 3, explanation: "Negative index -1 accesses the last character." },
        { id: 18, question: "What is the output of 'ABCD'[0]?", options: ["A", "B", "C", "D"], correct: 0, explanation: "Index 0 returns the first character 'A'." },
        { id: 19, question: "Which string method would you use to convert a string to all uppercase letters?", options: ["uppercase", "toUpper()", "upper()", "capitalize()"], correct: 2, explanation: "The `upper()` method returns an uppercase version of the string." },
        { id: 20, question: "What is the result of len('') in Python?", options: ["null", "0", "1", "Error"], correct: 1, explanation: "The length of an empty string is 0." },
        { id: 21, question: "What does the '\\n' escape sequence represent?", options: ["Tab", "Backslash", "New line", "Single quote"], correct: 2, explanation: "\\n is the newline character." },
        { id: 22, question: "What is the output of 'Hello' + 'World'?", options: ["Hello World", "HelloWorld", "Hello+World", "Error"], correct: 1, explanation: "String concatenation joins them without spaces: 'HelloWorld'." },
        // Page 4 - Q23 to Q29
        { id: 23, question: "Given st = 'Fantastic', what does st[0:6] return?", options: ["Fantas", "Fantast", "Fantastic", "F"], correct: 0, explanation: "Slice [0:6] includes indices 0 through 5: 'Fantas'." },
        { id: 24, question: "What will 'Hello World'.split() return?", options: ["['Hello', 'World']", "['Hello World']", "'Hello', 'World'", "Hello World"], correct: 0, explanation: "split() without arguments splits on whitespace, returning a list of words." },
        { id: 25, question: "How do you convert the number 99 to a string in Python?", options: ["string(99)", "toString(99)", "str(99)", "toString(99)"], correct: 2, explanation: "Use the built-in `str()` function." },
        { id: 26, question: "What is the output of print('Hi {}, your age is {}'.format('Amy', 21))?", options: ["Hi {}, your age is {} Amy 21", "Hi Amy, your age is 21", "Hi 21, your age is Amy", "Error"], correct: 1, explanation: "format() replaces placeholders in order." },
        { id: 27, question: "Given st = 'Python', what does st[1:4] return?", options: ["Pyt", "yth", "ytho", "Pyth"], correct: 1, explanation: "Indices 1,2,3 give 'yth'." },
        { id: 28, question: "Which module must be imported to work with dates and times in Python?", options: ["time", "calendar", "datetime", "date"], correct: 2, explanation: "The `datetime` module provides classes for manipulating dates and times." },
        { id: 29, question: "What is the correct way to read keyboard input in Python?", options: ["read()", "input()", "keyboard()", "scan()"], correct: 1, explanation: "`input()` reads a line from standard input." },
        // Page 5 - Q30 to Q36
        { id: 30, question: "The Python time() function returns:", options: ["The current date", "The current time in seconds", "The current time formatted as a string", "The system uptime"], correct: 1, explanation: "`time.time()` returns seconds since the epoch (January 1, 1970)." },
        { id: 31, question: "Which operator is used to check equality in Python?", options: ["=", "==", "eq", "!="], correct: 1, explanation: "`==` compares values for equality." },
        { id: 32, question: "What is the result of 5 > 5 in Python?", options: ["True", "False", "None", "Error"], correct: 1, explanation: "5 is not greater than 5, so False." },
        { id: 33, question: "According to the order of evaluation for logical operators, which is evaluated first?", options: ["and", "or", "not", "They are evaluated left to right"], correct: 2, explanation: "`not` has the highest precedence among logical operators." },
        { id: 34, question: "What is the result of True and False?", options: ["True", "False", "Maybe", "Error"], correct: 1, explanation: "`and` returns True only if both operands are True." },
        { id: 35, question: "What is the output of the following code? n = 5; v = 8; print(n == v or n + 4 > v)", options: ["True", "False", "5", "Error"], correct: 0, explanation: "n==v is False, but n+4>v (9>8) is True → True or False = True." },
        { id: 36, question: "What is the correct syntax for an if statement in Python?", options: ["if condition then:", "if condition:", "if (condition)", "if condition then"], correct: 1, explanation: "The condition line ends with a colon." },
        // Page 6 - Q37 to Q42
        { id: 37, question: "What is crucial about indentation in Python decision structures?", options: ["It's optional for readability", "It's how Python knows which statements are part of the block", "Only one space is required", "Tabs and spaces can be mixed freely"], correct: 1, explanation: "Indentation defines code blocks; mismatched indentation causes errors." },
        { id: 38, question: "What will the following code print if n = 2? if n == 1: print('one') elif n == 2: print('two') elif n == 3: print('three') else: print('Too big!') print('Done!')", options: ["two", "two Done!", "Too big! Done!", "two \\n Done!"], correct: 3, explanation: "n==2 prints 'two', then after the if-elif block, 'Done!' is printed." },
        { id: 39, question: "The colon (:) in an if statement indicates:", options: ["The end of the line", "The start of a block of statements", "A comment", "String concatenation"], correct: 1, explanation: "The colon marks the beginning of the indented block." },
        { id: 40, question: "What is an iteration?", options: ["The condition that controls a loop", "Each time a loop is executed", "The code inside a loop", "The variable that counts loop executions"], correct: 1, explanation: "An iteration is one execution of the loop body." },
        { id: 41, question: "What is the main difference between a for loop and a while loop?", options: ["For loops are faster", "While loops always run at least once", "For loops are typically used when you know the number of iterations in advance", "There is no difference"], correct: 2, explanation: "`for` loops iterate over a sequence; `while` loops run based on a condition." },
        { id: 42, question: "What will the following code do? n = 1 while n <= 5: print(n)", options: ["Print numbers 1 to 5", "Print 1 indefinitely (infinite loop)", "Print nothing", "Cause a syntax error"], correct: 1, explanation: "n is never incremented, so the loop condition remains true forever." },
        // Page 7 - Q43,44,45,46,52,53,54
        { id: 43, question: "What is the output of range(1,6) in Python?", options: ["[1,2,3,4,5,6]", "[1,2,3,4,5]", "[0,1,2,3,4,5]", "[1,6]"], correct: 1, explanation: "range(1,6) generates numbers 1,2,3,4,5 (stop is exclusive)." },
        { id: 44, question: "How can you fix the following code to print 0 to 10? for i in range(0,10): print(i)", options: ["Change range(0,10) to range(0,11)", "Change range(0,10) to range(0,10,1)", "Add i += 1 inside the loop", "Change range(0,10) to range(1,10)"], correct: 0, explanation: "range(0,11) includes 10 because stop is exclusive." },
        { id: 45, question: "What is an off-by-one error?", options: ["When you use the wrong comparison operator", "When you forget to update the loop variable", "When you stop the loop one iteration too early or too late", "When you use the wrong loop type"], correct: 2, explanation: "Off-by-one errors occur when loop boundaries are incorrect." },
        { id: 46, question: "What is the index of the first element in a Python list?", options: ["1", "0", "-1", "First"], correct: 1, explanation: "Python lists are 0-indexed." },
        { id: 52, question: "What is a key characteristic of a tuple?", options: ["It is mutable", "It is unchangeable (immutable)", "It cannot contain duplicate values", "It is unordered"], correct: 1, explanation: "Tuples are immutable – cannot be changed after creation." },
        { id: 53, question: "How are tuples written in Python?", options: ["With square brackets []", "With curly brackets {}", "With round brackets ()", "With angle brackets <>"], correct: 2, explanation: "Tuples use parentheses (round brackets)." },
        { id: 54, question: "What is true about sets in Python?", options: ["Sets are ordered and indexed", "Sets cannot have two items with the same value", "Sets are written with round brackets", "All of the above"], correct: 1, explanation: "Sets are unordered collections of unique elements." },
        // Page 8 - Q55 to Q61
        { id: 55, question: "How do you access a value in a dictionary?", options: ["By its index position", "By its key", "By its value", "By calling dict.get()"], correct: 1, explanation: "Dictionary values are accessed via their keys." },
        { id: 56, question: "What does dict.keys() return?", options: ["All values in the dictionary", "All keys in the dictionary", "The number of keys in the dictionary", "The first key in the dictionary"], correct: 1, explanation: "`dict.keys()` returns a view of all keys." },
        { id: 57, question: "Which statement correctly adds a new key-value pair to a dictionary?", options: ["dict.add(4, 'four')", "dict[4] = 'four'", "dict.append(4: 'four')", "dict.insert(4, 'four')"], correct: 1, explanation: "Assignment using square brackets adds or updates an entry." },
        { id: 58, question: "What are parameters in a function?", options: ["The output values of a function", "The inputs to a function", "The name of the function", "The documentation of a function"], correct: 1, explanation: "Parameters are the variables listed in the function definition." },
        { id: 59, question: "What will print(max(3, 5, 2)) output?", options: ["2", "3", "5", "(3,5,2)"], correct: 2, explanation: "max() returns the largest argument." },
        { id: 60, question: "Which module would you import to use the randint() function?", options: ["math", "random", "time", "sys"], correct: 1, explanation: "`randint()` is in the `random` module." },
        { id: 61, question: "What is a lambda function?", options: ["A function that requires multiple lines", "A function that does not have a name", "A function that returns multiple values", "A built-in Python function"], correct: 1, explanation: "Lambda functions are anonymous, single-expression functions." },
        // Page 9 - Q62, Q63, A1, A3
        { id: 62, question: "What does 'from somefile import *' do?", options: ["Imports only the className from somefile", "Imports everything from somefile into the current namespace", "Creates a new file called somefile", "Imports the file but requires prefix for all items"], correct: 1, explanation: "It imports all public names from the module." },
        { id: 63, question: "After using 'import somefile', how do you refer to a function named 'myFunction' from that module?", options: ["myFunction()", "somefile.myFunction()", "import.myFunction()", "module.myFunction()"], correct: 1, explanation: "Use dot notation with the module name." },
        { id: 64, question: "What will be the output of the following code? x = 10; y = 3; result = x / y * 2; print(result)", options: ["6.0", "6.666666666666667", "3.333333333333335", "20.0"], correct: 1, explanation: "Division produces a float: 10/3≈3.3333, times 2 = 6.6667." },
        { id: 65, question: "What is the output? num = 7; if num % 2 == 0: print('Even') elif num % 3 == 0: print('Divisible by 3') else: print('Odd')", options: ["Even", "Divisible by 3", "Odd", "Nothing"], correct: 2, explanation: "7%2 !=0 and 7%3 !=0, so else branch prints 'Odd'." },
        // Page 10 - Q4 (programming), A5, A6
        { id: 66, question: "What will this code display? count = 0; while count < 3: print(count, end=' '); count += 1; print('Done')", options: ["0 1 2 Done", "0 1 2 3 Done", "1 2 3 Done", "0 1 2"], correct: 0, explanation: "Loop prints 0,1,2 then prints 'Done'." },
        { id: 67, question: "What is the result? list1 = [1,2,3]; list2 = list1; list2.append(4); print(list1)", options: ["[1,2,3]", "[1,2,3,4]", "[4]", "Error"], correct: 1, explanation: "list2 references the same object as list1; modifying list2 affects list1." },
        { id: 68, question: "What does this code output? def mystery(a,b): return a * b + a; print(mystery(3,4))", options: ["12", "15", "7", "16"], correct: 1, explanation: "3*4+3 = 12+3 = 15." },
        { id: 69, question: "What will be the output? for i in range(3): for j in range(2): print(i, j)", options: ["0 0, 0 1, 1 0, 1 1, 2 0, 2 1", "0 0, 1 1, 2 2", "0 1, 1 2, 2 3", "0 0, 0 1, 1 0, 1 1"], correct: 0, explanation: "Nested loops produce all pairs (i,j)." },
        // Page 11 - 1, B2, B3, C1, C2
        { id: 70, question: "Complete the code to calculate the average of three numbers: a=10; b=20; c=30; average = ______; print(average)", options: ["(a+b+c)/3", "a+b+c/3", "(a+b+c)//3"], correct: 0, explanation: "Average is sum divided by count." },
        { id: 71, question: "Which line correctly checks if a number is between 10 and 20 (inclusive)? num = 15; if ______: print('In range')", options: ["num >= 10 and num <= 20", "10 <= num <= 20", "num in range(10,21)", "All of the above"], correct: 3, explanation: "All three expressions are valid and correct." },
        { id: 72, question: "Complete the code to create a list of even numbers from 0 to 20: evens = ______", options: ["[n for n in range(21) if n%2==0]", "[n for n in range(0,21,2)]", "Both A and B work"], correct: 2, explanation: "Both list comprehensions produce the same result." },
        { id: 73, question: "What is wrong with this code? for i in range(5) print(i)", options: ["Missing colon after range(5)", "print should be Print", "range(5) should be range(0,5)", "Nothing is wrong"], correct: 0, explanation: "A colon is required at the end of the for statement line." },
        { id: 74, question: "Identify the error: age = input('Enter age:'); if age >= 18: print('Adult')", options: ["input() returns a string, cannot compare with integer", "Missing colon after if statement", "print should be capitalized", "No error"], correct: 0, explanation: "input() returns a string; convert to int with int(age)." },
        // Page 12 - 4, C5, C7, C9
        { id: 75, question: "Find the error: def calculate_sum(numbers): total = 0; for num in numbers total == num; return total; result = calculate_sum([1,2,3]); print(result)", options: ["Missing colon after for loop", "numbers should be in quotes", "total is not initialized", "No error"], correct: 0, explanation: "A colon is missing after the for statement." },
        { id: 76, question: "What's wrong with this code? x = 10; if x = 10: print('x is 10')", options: ["Should use == for comparison, not =", "Missing parentheses", "x should be in quotes", "No error"], correct: 0, explanation: "Assignment (=) used instead of equality (==)." },
        { id: 77, question: "What's wrong with this string manipulation? text = 'Hello'; text[0] = 'J'; print(text)", options: ["Strings are immutable, cannot assign to index", "Should use replace() method", "Index should be 1", "No error"], correct: 0, explanation: "Strings are immutable; use text = 'J' + text[1:]." },
        { id: 78, question: "What's wrong with this dictionary access? student = {'name': 'Alice', 'age': 20}; print(student['grade'])", options: ["Key 'grade' doesn't exist", "Should use student.grade", "Dictionary should use = not :", "No error"], correct: 0, explanation: "Accessing a missing key raises KeyError." },
        // Page 13 - 10, Chapter 2 Q1-5
        { id: 79, question: "Identify the error in this while loop: count = 5; while count > 0: print(count); count += 1", options: ["Infinite loop (count increases, never reaches <= 0)", "Should use for loop instead", "count should start at 0", "No error"], correct: 0, explanation: "count increases, so condition remains true forever." },
        { id: 80, question: "What is true about classes in Python?", options: ["Classes must be defined with an interface file", "Everything in Python is really an object", "Classes cannot have methods", "Python requires the 'new' keyword for instantiation"], correct: 1, explanation: "In Python, all data types are objects, including classes themselves." },
        { id: 81, question: "What is the purpose of the 'self' parameter in Python class methods?", options: ["It refers to the class itself", "It refers to the current instance of the class", "It's a keyword that must be used to call methods", "It's optional and can be omitted"], correct: 1, explanation: "self is the instance on which the method is called." },
        { id: 82, question: "Which method serves as the constructor in a Python class?", options: ["__construct__", "__new__", "__init__", "__main__"], correct: 2, explanation: "__init__ initializes a new instance." },
        { id: 83, question: "How do you create a new instance of a class named 'Student'?", options: ["x = new Student()", "x = Student.new()", "x = Student()", "x = Student.newInstance()"], correct: 2, explanation: "Call the class like a function: Student()." },
        { id: 84, question: "In the method definition 'def get_age(self):', why is 'self' included?", options: ["It must be explicitly passed when calling the method", "It gets bound to the calling instance automatically", "It's a Python keyword", "It's optional for static methods only"], correct: 1, explanation: "self is automatically passed as the first argument." },
        // Page 14 - Q6 to Q12
        { id: 85, question: "What happens when you call b = student('Bob', 21)?", options: ["The new method receives 'Bob' and 21", "The init method receives 'Bob' and 21", "The class constructor receives 'Bob' and 21", "Both b and c"], correct: 3, explanation: "__init__ is called with the arguments." },
        { id: 86, question: "What is a data attribute in Python?", options: ["An attribute owned by the class as a whole", "A variable owned by a particular instance of a class", "A method that returns data", "A built-in function for data manipulation"], correct: 1, explanation: "Instance attributes are data attributes specific to each instance." },
        { id: 87, question: "What is a class attribute?", options: ["An attribute that each instance has its own copy of", "An attribute owned by the class as a whole, shared by all instances"], correct: 1, explanation: "Class attributes are defined directly in the class body and shared." },
        { id: 88, question: "How do you access a class attribute safely from within an instance method?", options: ["self.class.attribute", "class.attribute", "self.__class__attribute", "self.class.attribute"], correct: 1, explanation: "Use ClassName.attribute or self.__class__.attribute." },
        { id: 89, question: "Given the code: class counter: overall_total = 0; def __init__(self): self.my_total = 0; What is 'overall_total' and 'my_total' respectively?", options: ["Both are class attributes", "Both are data attributes", "'overall_total' is a class attribute, 'my_total' is a data attribute", "'overall_total' is a data attribute, 'my_total' is a class attribute"], correct: 2, explanation: "overall_total is shared; my_total belongs to each instance." },
        { id: 90, question: "How do you define a subclass in Python?", options: ["class Cs_student extends student:", "class Cs_student(student):", "class Cs_student inherits student:", "class Cs_student : student"], correct: 1, explanation: "Subclass syntax: class Child(Parent):" },
        { id: 91, question: "To call a parent class method from a subclass, you:", options: ["Use the 'super' keyword automatically", "Explicitly call 'parentClass.methodName(self, args)'", "Use 'self.parent.method()'", "Cannot call parent methods once overridden"], correct: 1, explanation: "Both super() and direct parent class name work." },
        // Page 15 - Q13,14,16,17,18,19,20
        { id: 92, question: "When is the only time you explicitly pass 'self' as an argument?", options: ["When creating a new instance", "When calling a method of an ancestor class", "When defining a new method", "When accessing data attributes"], correct: 1, explanation: "Never; self is always passed automatically by Python." },
        { id: 93, question: "What does the '__repr__' method do?", options: ["Repeats a string multiple times", "Represents the object as a string for display", "Replaces attributes in the object", "Returns the number of attributes"], correct: 1, explanation: "__repr__ returns an unambiguous string representation." },
        { id: 94, question: "How do you make a method private in Python?", options: ["Use the 'private' keyword", "Start the method name with two underscores (e.g., '__method')", "Start the method name with one underscore", "Use the 'protected' keyword"], correct: 1, explanation: "Name mangling with double underscore makes it pseudo-private." },
        { id: 95, question: "Which naming convention is used for Python's built-in methods and attributes?", options: ["Single underscore prefix: '_method'", "Double underscore both ends: '__method__'", "Double underscore prefix only: '__method'", "Capital letters: 'Method'"], correct: 1, explanation: "Magic methods like __init__ have double underscores on both sides." },
        { id: 96, question: "What are the three essential steps in file handling?", options: ["Create, read, delete", "Open, perform operations, close", "Write, save, exit", "Initialize, process, terminate"], correct: 1, explanation: "Open the file, read/write, then close it." },
        { id: 97, question: "Why is it important to close a file?", options: ["To delete the file from disk", "To release system resources", "To make the file read-only", "To compress the file"], correct: 1, explanation: "Closing frees up system resources and ensures data is flushed." },
        { id: 98, question: "What are the two types of files in Python?", options: [".txt and .doc files", "Text files and binary files", "Readable and writable files", "ASCII and Unicode files"], correct: 1, explanation: "Files are either text (human-readable) or binary (raw bytes)." },
        // Page 16 - Q21,22,24,25,26,27,28
        { id: 99, question: "What is an absolute path?", options: ["The path relative to current working directory", "The full path starting from the root directory"], correct: 1, explanation: "An absolute path specifies the full location from the root." },
        { id: 100, question: "What does 'os.getcwd()' do?", options: ["Changes the current working directory", "Creates a new directory", "Displays the current working directory", "Deletes the current directory"], correct: 2, explanation: "getcwd = get current working directory." },
        { id: 101, question: "What does the 'r' mode do when opening a file?", options: ["Opens file for writing only", "Opens file for reading only, file pointer at beginning", "Opens file for appending", "Opens file for reading and writing"], correct: 1, explanation: "'r' = read-only, starting at the beginning." },
        { id: 102, question: "Which mode opens a file for writing only, creates a new file if it doesn't exist, and overwrites if it exists?", options: ["'r'", "'a'", "'w'", "'r+'"], correct: 2, explanation: "'w' truncates existing file or creates a new one." },
        { id: 103, question: "What does 'a+' mode do?", options: ["Opens file for reading only", "Opens file for both appending and reading", "Opens file for writing only", "Opens file for binary writing"], correct: 1, explanation: "'a+' opens for reading and appending." },
        { id: 104, question: "Which mode should you use to work with binary files?", options: ["Include 'b' in the mode (e.g., 'rb', 'wb')", "Include 'bin' in the mode", "Use special binary functions only", "Binary files use the same modes as text files"], correct: 0, explanation: "Add 'b' to the mode string." },
        { id: 105, question: "What does 'file.closed' return?", options: ["The file name", "The file mode", "True if the file is closed, False if open", "The file encoding"], correct: 2, explanation: "file.closed is a boolean attribute." },
        // Page 17 - Q29-35
        { id: 106, question: "Which attribute returns the encoding used for byte-to-string conversion?", options: ["file.mode", "file.name", "file.encoding", "file.newlines"], correct: 2, explanation: "file.encoding gives the text encoding." },
        { id: 107, question: "What does 'read()' method return when called without arguments?", options: ["The first line of the file", "The entire file as a string", "A list of all lines", "The file size in bytes"], correct: 1, explanation: "read() reads the whole file if no size given." },
        { id: 108, question: "What does 'readlines()' method return?", options: ["A string containing all lines", "A list where each element is a line from the file"], correct: 1, explanation: "readlines() returns a list of lines." },
        { id: 109, question: "Which method is most memory-efficient for reading a large file line by line?", options: ["read()", "readlines()", "Using a for loop directly on the file object", "readline() in a while loop"], correct: 2, explanation: "Iterating over the file object reads lines lazily." },
        { id: 110, question: "When using write(), when does the data actually get saved to the file?", options: ["Immediately after write() is called", "When flush() or close() is called", "When the program starts", "When the file is opened"], correct: 1, explanation: "Data is buffered; flush/close writes it to disk." },
        { id: 111, question: "What happens if you open a file in 'w' mode and it already exists?", options: ["An error is raised", "The file is appended", "The file is overwritten", "The file is renamed"], correct: 2, explanation: "'w' truncates the existing file." },
        { id: 112, question: "What does 'tell()' method do?", options: ["Changes the file position", "Returns the current position within the file in bytes", "Tells you if the file is readable", "Returns the file size"], correct: 1, explanation: "tell() returns the current file pointer position." },
        // Page 18 - Q40-46
        { id: 113, question: "Which module is used for serialization/deserialization in Python?", options: ["serial", "json", "pickle", "marshal"], correct: 2, explanation: "pickle is the standard serialization module." },
        { id: 114, question: "Which method writes a pickled object to a file?", options: ["pickle.save()", "pickle.write()", "pickle.dump()", "pickle.store()"], correct: 2, explanation: "pickle.dump(obj, file) writes the object." },
        { id: 115, question: "Why use pickle instead of manually encoding data?", options: ["It's faster", "It automatically handles complex objects and variable lengths", "It creates smaller files", "It's the only way to write binary files"], correct: 1, explanation: "pickle can serialize almost any Python object." },
        { id: 116, question: "What does CSV stand for?", options: ["Comma Separated Variables", "Comma Separated Values", "Character Separated Values", "Column Separated Values"], correct: 1, explanation: "CSV = Comma Separated Values." },
        { id: 117, question: "In CSV format, how are fields with embedded commas handled?", options: ["They are not allowed", "They are enclosed in double quotes", "They use a different separator", "They are split into multiple fields"], correct: 1, explanation: "Fields containing delimiters are quoted." },
        { id: 118, question: "Which module is used for CSV file handling in Python?", options: ["csv", "excel", "spreadsheet", "table"], correct: 0, explanation: "The built-in `csv` module handles CSV files." },
        { id: 119, question: "What does 'csv.reader()' return?", options: ["A dictionary of all data", "An iterator that returns each row as a list", "A string containing all data", "A list of all column names"], correct: 1, explanation: "csv.reader returns an iterator over rows (as lists)." },
        // Page 19 - Q48,49,50,51
        { id: 120, question: "What will be the output of this code? class student: def __init__(self, n): self.name = n; s = student('Alice'); print(s.name)", options: ["Error: missing self", "Alice", "None", "AttributeError"], correct: 1, explanation: "The instance is created and the attribute is set correctly." },
        { id: 121, question: "In the following code, what is 'x'? class Sample: x = 10; def __init__(self): self.y = 20", options: ["Both are data attributes", "'x' is a class attribute, 'y' is a data attribute", "'x' is a data attribute, 'y' is a class attribute", "Both are class attributes"], correct: 1, explanation: "x is defined in the class body (class attribute), y is instance attribute." },
        { id: 122, question: "What will this code print? with open('test.txt', 'w') as f: f.write('Hello\\nWorld'); f = open('test.txt', 'r'); print(f.read(5)); f.close()", options: ["Hello", "Hello\\nWorld", "HelloW", "World"], correct: 0, explanation: "read(5) reads first 5 characters: 'Hello'." },
        { id: 123, question: "What does this code do? import pickle; data = [1,2,3,4]; with open('data.pkl', 'wb') as f: pickle.dump(data, f)", options: ["Writes the list as text to a file", "Serializes the list and writes it as binary", "Creates a CSV file", "Raises an error"], correct: 1, explanation: "pickle.dump serializes the list to a binary file." },
        // Page 20 - Q52, then True/False 53-58, Q59
        { id: 124, question: "What will be the output? f = open('sample.txt','w'); f.write('Line1\\nLine2\\nLine3'); f.close(); f = open('sample.txt','r'); lines = f.readlines(); print(len(lines)); f.close()", options: ["1", "3", "2", "Error"], correct: 1, explanation: "Three lines were written, so readlines returns a list of 3 lines." },
        { id: 125, question: "True or False: Python has a 'new' keyword for creating objects.", options: ["True", "False"], correct: 1, explanation: "Python uses class instantiation without 'new'." },
        { id: 126, question: "True or False: The 'self' parameter must be included when calling a method.", options: ["True", "False"], correct: 1, explanation: "self is automatically passed; you don't pass it explicitly." },
        { id: 127, question: "True or False: Python supports multiple inheritance.", options: ["True", "False"], correct: 0, explanation: "A class can inherit from multiple parent classes." },
        { id: 128, question: "True or False: In Python, you must explicitly free memory when done with objects.", options: ["True", "False"], correct: 1, explanation: "Python has automatic garbage collection." },
        { id: 129, question: "True or False: Text files store data as bytes while binary files store as characters.", options: ["True", "False"], correct: 1, explanation: "Text files store characters, binary files store raw bytes." },
        { id: 130, question: "True or False: The 'os.remove()' method is used to delete a directory.", options: ["True", "False"], correct: 1, explanation: "os.remove() deletes files; os.rmdir() deletes empty directories." },
        { id: 131, question: "The method called automatically when an object is created is:", options: ["__create__", "__init__", "__new__", "__main__"], correct: 1, explanation: "__init__ is the initializer." },
        // Page 21 - Q60-65
        { id: 132, question: "To prevent a method from being accessed outside the class, use ______ at the beginning of its name.", options: ["single underscore", "double underscore", "triple underscore", "no underscore"], correct: 1, explanation: "Double underscore triggers name mangling." },
        { id: 133, question: "The ______ method defines how an object is represented as a string.", options: ["__str__ or __repr__", "__string__", "__format__", "__display__"], correct: 0, explanation: "__str__ and __repr__ provide string representations." },
        { id: 134, question: "To read a file line by line efficiently, use a ______ loop on the file object.", options: ["while", "for", "do-while", "repeat"], correct: 1, explanation: "`for line in file:` reads lines lazily." },
        { id: 135, question: "The ______ method returns the current file position in bytes.", options: ["position()", "tell()", "seek()", "locate()"], correct: 1, explanation: "tell() returns the current file pointer." },
        { id: 136, question: "Which code correctly demonstrates inheritance?", options: ["class Child(Parent):", "class Child extends Parent:", "class Child inherits Parent:", "class Child : Parent"], correct: 0, explanation: "Correct syntax: class Child(Parent):" },
        { id: 137, question: "To call the parent class's __init__ method from a child class, you would write:", options: ["super().__init__(args)", "Parent.__init__(self, args)", "Both a and b work", "self.Parent.__init__(args)"], correct: 2, explanation: "Both super() and direct parent class name work." },
        // Page 22 - Q66,67,68,70,71
        { id: 138, question: "What is the output? class Test: count = 0; def __init__(self): Test.count += 1; a = Test(); b = Test(); c = Test(); print(Test.count)", options: ["0", "3", "Error", "1"], correct: 1, explanation: "Each instance increments the class attribute count." },
        { id: 139, question: "Which file mode would you use to add data to the end of an existing text file without overwriting?", options: ["'w'", "'r'", "'a'", "'x'"], correct: 2, explanation: "'a' (append) adds data at the end." },
        { id: 140, question: "What does this code do? with open('data.txt', 'r') as f: data = f.read()", options: ["Opens the file and automatically closes it after the block", "Keeps the file open indefinitely", "Raises an error if file doesn't exist", "Both a and c"], correct: 3, explanation: "with ensures closure; if file missing, FileNotFoundError raised." },
        { id: 141, question: "What's wrong with this code? class Student: def __init__(self, name): name = name", options: ["Missing self parameter", "Should use self.name = name to create an attribute", "__init__ cannot take parameters", "Nothing is wrong"], correct: 1, explanation: "The assignment only modifies the local parameter, not an instance attribute." },
        { id: 142, question: "What error will occur? f = open('nonexistent.txt', 'r'); content = f.read()", options: ["No error, file is created", "FileNotFoundError", "PermissionError", "TypeError"], correct: 1, explanation: "Opening a non-existent file for reading raises FileNotFoundError." },
        // Page 23 - Q72, Chapter 3 Q2,3,4,5
        { id: 143, question: "What's the problem with this file handling code? f = open('data.txt', 'w'); f.write('Hello'); # ... program ends without closing file", options: ["Data might not be saved", "File will be corrupted", "Python will crash", "Nothing. Python auto-closes at program end"], correct: 0, explanation: "Data may remain in buffer; it's good practice to close." },
        { id: 144, question: "Which of the following is NOT one of the three main categories of machine learning mentioned?", options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Associative Learning"], correct: 3, explanation: "The three main categories are Supervised, Unsupervised, and Reinforcement." },
        { id: 145, question: "In supervised learning, the training data contains the desired solutions, which are also called...", options: ["Clusters", "Grades", "Labels or Targets", "Features"], correct: 2, explanation: "The correct outputs are called labels or targets." },
        { id: 146, question: "Predicting whether an email is 'spam' or 'not spam' is an example of a ______ task, while predicting the exact price of a house is a ______ task.", options: ["Regression; Classification", "Clustering; Regression", "Classification; Regression", "Reinforcement; Classification"], correct: 2, explanation: "Spam detection is classification; price prediction is regression." },
        { id: 147, question: "An algorithm that identifies natural groupings of customers based on their purchasing patterns is performing...", options: ["Classification", "Regression", "Dimensionality Reduction", "Clustering"], correct: 3, explanation: "Grouping without labels is clustering." },
        // Page 24 - Q7,8,10
        { id: 148, question: "The main challenge with K-Means is selecting the appropriate number of clusters (K). A common technique to help with this is...", options: ["The Silhouette Score", "The Elbow Method", "The Adjusted Rand Score", "The Confusion Matrix"], correct: 1, explanation: "Elbow method plots inertia vs. K to find the elbow point." },
        { id: 149, question: "What is the key difference in the data provided for a reinforcement learning algorithm compared to a supervised learning one?", options: ["Reinforcement learning uses unlabeled data.", "Reinforcement learning provides a grade or measure of how good an output was, rather than the correct output.", "Reinforcement learning requires a target array.", "Reinforcement learning uses a features matrix."], correct: 1, explanation: "RL uses rewards/penalties, not exact target labels." },
        { id: 150, question: "A model that performs exceptionally well on training data but poorly on new, unseen data is suffering from...", options: ["Underfitting", "High Bias", "Overfitting", "Low Variance"], correct: 2, explanation: "Overfitting means the model memorized training noise." },
        // Page 25 - Q11-16,18-20 (skip 17)
        { id: 151, question: "Scikit-learn models require data to be in a specific format. What is that format?", options: ["A Python list of lists", "A Pandas DataFrame", "A 2D NumPy array (features matrix) of shape (n_samples, n_features)", "A 1D NumPy array of shape (n_features,)"], correct: 2, explanation: "Scikit-learn expects a 2D array of shape (samples, features)." },
        { id: 152, question: "In Scikit-learn's Estimator API, what is the key difference between hyperparameters and learned parameters?", options: ["Hyperparameters are set by the user before training; learned parameters (with an underscore suffix) are determined during the fit() process.", "Hyperparameters are learned during training; learned parameters are set by the user.", "Hyperparameters are only for neural networks; learned parameters are for all other models.", "There is no difference; the terms are interchangeable."], correct: 0, explanation: "Hyperparameters are set before training; learned parameters have trailing underscore." },
        { id: 153, question: "What is the correct order of steps in a basic Scikit-learn workflow?", options: ["1. Train on your data, 2. Import the model, 3. Build the model, 4. Make predictions.", "1. Import the model, 2. Build the model with hyperparameters, 3. Train on your data, 4. Make predictions.", "1. Build the model, 2. Import the model, 3. Make predictions, 4. Train on your data.", "1. Import the model, 2. Train on your data, 3. Build the model, 4. Make predictions."], correct: 1, explanation: "Typical order: import, instantiate, fit, predict." },
        { id: 154, question: "A 'predictor' estimator in Scikit-learn supports methods like predict(). What is a 'transformer' estimator primarily used for?", options: ["Making final predictions on test data.", "Evaluating model performance.", "Creating new representations of data (e.g., scaling, PCA).", "Tuning hyperparameters."], correct: 2, explanation: "Transformers transform data (e.g., StandardScaler, PCA)." },
        { id: 155, question: "In the provided code for a confusion matrix, `conf_mat = confusion_matrix(y_test, y_test_pred)`, what do `y_test` and `y_test_pred` represent?", options: ["y_test is the training data; y_test_pred is the model's prediction on training data.", "y_test is the ground truth; y_test_pred is the model's predictions.", "y_test is the model's predictions; y_test_pred is the ground truth.", "y_test is the features matrix; y_test_pred is the target array."], correct: 1, explanation: "y_test = true labels, y_test_pred = predicted labels." },
        { id: 156, question: "Which metric is the harmonic mean of precision and recall?", options: ["Accuracy", "R² Score", "Silhouette Score", "F1 Score"], correct: 3, explanation: "F1 = 2 * (precision*recall)/(precision+recall)." },
        { id: 157, question: "The `cross_val_predict` function from Scikit-learn returns...", options: ["The average cross-validation score.", "A trained model for each fold.", "Predictions for each data point when it was in the test fold during cross-validation.", "The best hyperparameters found during cross-validation."], correct: 2, explanation: "It returns out-of-fold predictions for each sample." },
        { id: 158, question: "For a regression task, which metric could be used to assess the model quality?", options: ["Mean Absolute Error (MAE)", "Mean Squared Error (MSE)", "Accuracy", "Both A and B"], correct: 3, explanation: "MAE and MSE are common regression metrics." },
        { id: 159, question: "What is the primary purpose of using a `Pipeline` in Scikit-learn?", options: ["To train multiple models in parallel on different CPU cores.", "To chain multiple preprocessing steps with a final estimator into a single object.", "To visualize the model's decision boundaries.", "To save a trained model to disk."], correct: 1, explanation: "Pipeline encapsulates a sequence of transformations and a final estimator." },
        // Page 26 - Q21-26
        { id: 160, question: "Which scaling method transforms features to have a mean of 0 and a standard deviation of 1?", options: ["Min-Max Normalization (MinMaxScaler)", "Standardization (StandardScaler)", "Normalization (Normalizer)", "Robust Scaling (RobustScaler)"], correct: 1, explanation: "StandardScaler standardizes to zero mean and unit variance." },
        { id: 161, question: "Why is it problematic to simply map nominal categories like ['red', 'green', 'blue'] to integers [2,1,0]?", options: ["Integer encoding doesn't work with Scikit-learn.", "It is computationally inefficient.", "It implies an ordinal relationship that doesn't exist.", "It can only be used for regression tasks."], correct: 2, explanation: "Arbitrary integers introduce false ordering." },
        { id: 162, question: "Which encoder should you use for a feature like ['XS', 'S', 'M', 'L', 'XL'] to preserve the natural size order?", options: ["OneHotEncoder", "CountVectorizer", "OrdinalEncoder"], correct: 2, explanation: "OrdinalEncoder preserves order when categories have a natural ranking." },
        { id: 163, question: "You have a dataset with numerical, nominal, and ordinal columns. What is the best tool in Scikit-learn to apply different preprocessing transformations to each column type?", options: ["Pipeline", "FeatureUnion", "ColumnTransformer", "A simple for loop"], correct: 2, explanation: "ColumnTransformer applies different transformers to different columns." },
        { id: 164, question: "In a ColumnTransformer, what does the `remainder='passthrough'` parameter do?", options: ["It removes any columns not explicitly mentioned in the transformers list.", "It stops the transformation if an error occurs.", "It keeps any columns not explicitly mentioned in the transformation unchanged.", "It applies a default StandardScaler to all remaining columns."], correct: 2, explanation: "'passthrough' leaves unspecified columns unchanged." },
        { id: 165, question: "The TF-IDF vectorizer improves upon a simple count vectorizer by...", options: ["Counting only nouns and verbs.", "Boosting common words and penalizing rare words.", "Boosting words that appear frequently in a document but penalizing words that appear in many documents.", "Removing all punctuation and converting text to lowercase."], correct: 2, explanation: "TF-IDF down-weights words that appear in many documents." },
        // Page 27 - Q27,28,29,30,33,39
        { id: 166, question: "What is the primary goal of Principal Component Analysis (PCA)?", options: ["To predict a continuous target variable.", "To find the number of clusters in the data.", "To reduce dimensionality by finding the directions that maximize variance in the data.", "To fill in missing values in a dataset."], correct: 2, explanation: "PCA finds orthogonal components that maximize variance." },
        { id: 167, question: "When using PCA in a machine learning pipeline, what is the correct procedure?", options: ["Fit the PCA on the entire dataset before splitting into train and test.", "Fit the PCA on the training data, then use its transform() method on both the training and test data.", "Fit the PCA separately on both the training and test data.", "Use PCA's fit_transform() on both training and test data."], correct: 1, explanation: "Fit on training only, then transform both sets to avoid data leakage." },
        { id: 168, question: "Which imputation strategy uses the k-nearest neighbors approach to infer and fill in missing values?", options: ["SimpleImputer with strategy='mean'", "SimpleImputer with strategy='constant'", "KNNImputer", "IterativeImputer"], correct: 2, explanation: "KNNImputer uses k-nearest neighbors to estimate missing values." },
        { id: 169, question: "What is a potential pitfall of one-hot encoding?", options: ["It can only be used with numerical data.", "It can create a very high-dimensional dataset, which may cause problems for some algorithms like KNN or clustering.", "It cannot be used in a ColumnTransformer.", "It always loses the ordinal information in the data."], correct: 1, explanation: "One-hot encoding increases dimensionality, which can degrade performance." },
        { id: 170, question: "Which metric would you use to evaluate a clustering algorithm when you have the ground truth labels available?", options: ["Silhouette Score", "Within-cluster Sum of Squares (SSE)", "Adjusted Rand Score (ARS)", "F1 Score"], correct: 2, explanation: "Adjusted Rand Index compares clustering to ground truth." },
        { id: 171, question: "What is a key limitation of clustering algorithms like AgglomerativeClustering and DBSCAN?", options: ["They cannot handle numerical data.", "They require the number of clusters to be specified in advance.", "They only support fit() and fit_predict() - new points cannot be predicted after training.", "They are extremely slow and cannot be used on large datasets."], correct: 2, explanation: "These models cannot assign new points without refitting." },
        // Page 28 - Q41,42,43,46,47,48
        { id: 172, question: "Which hyperparameter tuning method tries every possible combination of hyperparameters from a specified grid?", options: ["RandomizedSearchCV", "BayesSearchCV", "GridSearchCV", "cross_val_score"], correct: 2, explanation: "GridSearchCV exhaustively searches the grid." },
        { id: 173, question: "In the context of decision trees, which of the following is a hyperparameter?", options: ["The feature used at the root node for splitting.", "The threshold value at a particular split.", "The max depth of the tree.", "The predicted class label for a leaf node."], correct: 2, explanation: "Max depth is a hyperparameter set before training." },
        { id: 174, question: "What is the purpose of the fit_predict() method in a clustering algorithm like KMeans?", options: ["It trains the model on the data and then evaluates it on the same data.", "It trains the model and returns the cluster labels for the training data in a single call.", "It makes predictions on new data using a pre-trained model.", "It is used to save the trained model to disk."], correct: 1, explanation: "fit_predict() is a convenience method for clustering." },
        { id: 175, question: "In K-Fold Cross-Validation with k = 5, how is the data split and used?", options: ["The data is split into 80% for training and 20% for testing once.", "The data is split into 5 folds. The model is trained on 4 folds and validated on 1 fold, repeating this process 5 times.", "The data is split into 5 random train/test splits.", "The model is trained 5 times on the same data with different hyperparameters."], correct: 1, explanation: "Standard k-fold cross-validation rotates the validation fold." },
        { id: 176, question: "When would you use a polynomial regression model?", options: ["When the relationship between features and target is linear.", "When the data has a non-linear trend.", "When the target variable is categorical.", "When you need to reduce the dimensionality of the data."], correct: 1, explanation: "Polynomial features capture non-linear relationships." },
        { id: 177, question: "If you get a perfect Adjusted Rand Score (ARS = 1.0) comparing your clustering result c_pred to the ground truth c_truth, what does this imply?", options: ["Every single data point has the exact same label number in c_pred as in c_truth.", "The clustering perfectly captures the true groupings, even if the cluster labels are different (e.g., all 1's in truth are 2's in prediction).", "The model has overfitted to the training data.", "The Silhouette Score will also be 1.0."], correct: 1, explanation: "ARI is invariant to permutation of cluster labels." },
        // Page 29 - Q49, Chapter 5 Q1-6
        { id: 178, question: "Which Scikit-learn class would you use to create binary columns for a nominal feature like 'city_of_birth' with values ['London', 'Paris', 'Tokyo']?", options: ["OrdinalEncoder", "LabelEncoder", "OneHotEncoder", "CountVectorizer"], correct: 2, explanation: "OneHotEncoder creates binary indicator columns." },
        { id: 179, question: "What is TensorFlow?", options: ["A high-level neural networks API.", "An open-source software library for numerical computation using data flow graphs.", "A cloud-based development environment.", "A type of neural network architecture."], correct: 1, explanation: "TensorFlow is a library for dataflow programming, especially deep learning." },
        { id: 180, question: "Which Keras API is best suited for building a simple, linear stack of layers?", options: ["Functional API", "Model Subclassing", "Sequential API", "Layer API"], correct: 2, explanation: "Sequential API is easiest for linear layer stacks." },
        { id: 181, question: "For a model with multiple inputs, shared layers, or multiple outputs, which Keras API is recommended?", options: ["Sequential API", "Functional API", "Recurrent API", "Convolutional API"], correct: 1, explanation: "Functional API supports complex topologies." },
        { id: 182, question: "What is one of the most exciting features of deep learning?", options: ["It requires manual feature extraction", "It performs particularly well in feature learning from raw data", "It only works for classifying cars", "It cannot detect features automatically"], correct: 1, explanation: "Deep learning automatically learns hierarchical features." },
        { id: 183, question: "What is the key difference between traditional Machine Learning and Deep Learning?", options: ["Deep Learning does not require an output layer", "Machine Learning combines feature extraction and classification into a single step", "Deep Learning combines feature extraction and classification into a single step", "There is no difference"], correct: 2, explanation: "Deep learning learns features and classifier end-to-end." },
        { id: 184, question: "How is a single colored image (with RGB channels) represented as a tensor, according to the image?", options: ["1D — (features)", "2D — (height, width)", "3D — (height, width, channels)", "4D — (samples, height, width, channels)"], correct: 2, explanation: "A single RGB image is a 3D tensor: height x width x channels." }
    ],
    // True/False section (from PDF pages 20-23 etc.)
    trueFalse: [
        { id: 185, question: "Python has a 'new' keyword for creating objects.", answer: false, correction: "Python does not have a 'new' keyword.", explanation: "Objects are created by calling the class like a function." },
        { id: 186, question: "The 'self' parameter must be included when calling a method.", answer: false, correction: "self is automatically passed.", explanation: "You do not explicitly pass self." },
        { id: 187, question: "Python supports multiple inheritance.", answer: true, correction: null, explanation: "A class can inherit from multiple parent classes." },
        { id: 188, question: "In Python, you must explicitly free memory when done with objects.", answer: false, correction: "Python has automatic garbage collection.", explanation: "Memory management is automatic via reference counting and GC." },
        { id: 189, question: "Text files store data as bytes while binary files store as characters.", answer: false, correction: "Text files store characters, binary files store bytes.", explanation: "Binary files contain raw bytes, text files contain encoded text." },
        { id: 190, question: "The 'os.remove()' method is used to delete a directory.", answer: false, correction: "os.remove() deletes files; os.rmdir() deletes empty directories.", explanation: "Use shutil.rmtree() for non-empty directories." }
    ],
    essay: []
}

let allQuestions = [...quizData.mcq, ...quizData.trueFalse];


// ---------- State ----------
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let answeredQuestions = [];
let quizQuestions = [];

// Combine MCQ and True/False
function buildQuiz() {
    quizQuestions = [...quizData.mcq, ...quizData.trueFalse];
    answeredQuestions = quizQuestions.map((_, i) => ({ answered: false, correct: false, selectedAnswer: null }));
}

// DOM elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const quizContainer = document.getElementById('quizContainer');
const progressBar = document.getElementById('progressBar');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const remainingCountEl = document.getElementById('remainingCount');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const essayContainer = document.getElementById('essayContainer');
const finalCorrectEl = document.getElementById('finalCorrect');
const finalWrongEl = document.getElementById('finalWrong');
const finalTotalEl = document.getElementById('finalTotal');
const breakdownList = document.getElementById('breakdownList');
const scoreValueEl = document.getElementById('scoreValue');
const scoreProgressEl = document.getElementById('scoreProgress');
const resultsIcon = document.getElementById('resultsIcon');

// Navigation
function navigateTo(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(`${pageId}Page`).classList.add('active');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) link.classList.add('active');
    });
    navMenu.classList.remove('active');
    if (pageId === 'quiz') initializeQuiz();
    else if (pageId === 'essay') renderEssayQuestions();
    else if (pageId === 'results') showResults();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navToggle?.addEventListener('click', () => navMenu.classList.toggle('active'));
navLinks.forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); navigateTo(link.dataset.page); }));

function initializeQuiz() {
    buildQuiz();
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    totalQuestionsEl.textContent = quizQuestions.length;
    updateStats();
    renderQuestion();
    updateNavButtons();
}

function renderQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    const status = answeredQuestions[currentQuestionIndex];
    const isMCQ = q.options !== undefined;

    let html = `<div class="question-card"><span class="question-type-badge ${isMCQ ? 'mcq' : 'true-false'}">${isMCQ ? 'Multiple Choice' : 'True / False'}</span>
                <div class="question-number">Question ${currentQuestionIndex+1}</div>
                <p class="question-text">${q.question}</p>`;

    if (isMCQ) {
        html += '<div class="options-container">';
        q.options.forEach((opt, idx) => {
            const selected = status.selectedAnswer === idx;
            let extraClass = '';
            if (status.answered) {
                if (idx === q.correct) extraClass = ' correct';
                else if (selected && idx !== q.correct) extraClass = ' wrong';
            } else if (selected) extraClass = ' selected';
            html += `<div class="option${extraClass}" onclick="selectOption(${idx})"><div class="option-indicator"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><span class="option-text">${opt}</span></div>`;
        });
        html += '</div>';
    } else {
        html += '<div class="options-container tf-options">';
        ['True', 'False'].forEach((val, idx) => {
            const answerVal = idx === 0;
            const selected = status.selectedAnswer === answerVal;
            let extraClass = '';
            if (status.answered) {
                if (answerVal === q.answer) extraClass = ' correct';
                else if (selected && answerVal !== q.answer) extraClass = ' wrong';
            } else if (selected) extraClass = ' selected';
            html += `<div class="option tf-option${extraClass}" onclick="selectTFOption(${answerVal})"><div class="option-indicator"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><span class="option-text">${val}</span></div>`;
        });
        html += '</div>';
    }

    if (status.answered) {
        const isCorrect = status.correct;
        html += `<div class="feedback-message show ${isCorrect ? 'correct' : 'wrong'}"><div class="feedback-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${isCorrect ? '<polyline points="20 6 9 17 4 12"/>' : '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'}</svg>${isCorrect ? 'Correct!' : 'Wrong!'}</div><div class="feedback-text">${q.explanation || (q.correction ? q.correction : 'The correct answer is highlighted above.')}</div></div>`;
    }
    html += '</div>';
    quizContainer.innerHTML = html;
    currentQuestionEl.textContent = currentQuestionIndex+1;
    updateProgressBar();
}

function selectOption(idx) {
    const status = answeredQuestions[currentQuestionIndex];
    if (status.answered) return;
    const q = quizQuestions[currentQuestionIndex];
    status.selectedAnswer = idx;
    status.answered = true;
    status.correct = (idx === q.correct);
    if (status.correct) correctCount++;
    else wrongCount++;
    updateStats();
    renderQuestion();
    updateNavButtons();
}

function selectTFOption(value) {
    const status = answeredQuestions[currentQuestionIndex];
    if (status.answered) return;
    const q = quizQuestions[currentQuestionIndex];
    status.selectedAnswer = value;
    status.answered = true;
    status.correct = (value === q.answer);
    if (status.correct) correctCount++;
    else wrongCount++;
    updateStats();
    renderQuestion();
    updateNavButtons();
}

function updateStats() {
    correctCountEl.textContent = correctCount;
    wrongCountEl.textContent = wrongCount;
    const remaining = quizQuestions.length - correctCount - wrongCount;
    remainingCountEl.textContent = remaining;
    updateProgressBar();
}

function updateProgressBar() {
    const answered = correctCount + wrongCount;
    const percent = (answered / quizQuestions.length) * 100;
    progressBar.style.width = `${percent}%`;
}

function updateNavButtons() {
    prevBtn.style.display = currentQuestionIndex > 0 ? 'flex' : 'none';
    const allAnswered = answeredQuestions.every(q => q.answered);
    if (currentQuestionIndex === quizQuestions.length-1 || allAnswered) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        finishBtn.style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length-1) {
        currentQuestionIndex++;
        renderQuestion();
        updateNavButtons();
    }
}
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateNavButtons();
    }
}
function finishQuiz() { navigateTo('results'); }

function renderEssayQuestions() {
    let html = '';
    quizData.essay.forEach((q, idx) => {
        html += `<div class="essay-card"><div class="essay-card-header"><div class="question-number">Question ${idx+1}</div><p class="question-text">${q.question}</p></div><div class="essay-card-body"><div class="essay-answer"><p>${q.answer}</p></div></div></div>`;
    });
    essayContainer.innerHTML = html;
}

function showResults() {
    const total = quizQuestions.length;
    const percent = total ? Math.round((correctCount/total)*100) : 0;
    scoreValueEl.textContent = percent;
    finalCorrectEl.textContent = correctCount;
    finalWrongEl.textContent = wrongCount;
    finalTotalEl.textContent = total;

    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percent/100)*circumference;
    setTimeout(() => {
        scoreProgressEl.style.strokeDashoffset = offset;
        if (percent >= 70) { scoreProgressEl.style.stroke = '#22c55e'; resultsIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'; }
        else if (percent >= 50) { scoreProgressEl.style.stroke = '#f59e0b'; resultsIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'; }
        else { scoreProgressEl.style.stroke = '#ef4444'; resultsIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'; }
    }, 100);

    let breakdown = '';
    answeredQuestions.forEach((st, i) => {
        const brief = quizQuestions[i].question.length > 60 ? quizQuestions[i].question.substring(0,60)+'...' : quizQuestions[i].question;
        breakdown += `<div class="breakdown-item ${st.correct ? 'correct' : 'wrong'}"><div class="status-icon"><svg viewBox="0 0 24 24" fill="none" stroke="white">${st.correct ? '<polyline points="20 6 9 17 4 12"/>' : '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'}</svg></div><span class="question-brief">${brief}</span><span class="question-num">Q${i+1}</span></div>`;
    });
    breakdownList.innerHTML = breakdown;
}

function restartQuiz() {
    scoreProgressEl.style.strokeDashoffset = 283;
    navigateTo('quiz');
}

document.addEventListener('DOMContentLoaded', () => navigateTo('home'));
