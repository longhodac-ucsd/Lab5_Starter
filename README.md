# Lab 5 - Starter
### Pt 3 
1. No. I don't think I would use a unit test to test the “message” feature of a messaging application since it would touches a lot of pieces like the UI, formatting logic, network calls,... A unit test is meant to isolate one small piece of code like a function or class.

2. Yes. A 80-character limt csan coded in one function. I can isolate the function that checks text.length <= 80 by verifying that it allows strings of length <= 80 and rejets string of length > 80.