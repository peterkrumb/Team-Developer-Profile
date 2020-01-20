# Unit 10 OOP Homework: Template Engine - Employee Summary

## Goal
The goal with this assignment is to create a webpage with cards displaying name, role, email, id number, and either github, office number or school depending on the role.

## Classes
This was our first assignment using classes. Classes technically make it easier to extend functions and qualities to many different subclasses although in this instance we only had a few different types of roles.

## Inquirer
The inquirer use case was similar to our last assignment, only in this one I implemented a switch case which changed the set of questions depending on whether user wanted to add more team members. If they didn't want to add more, the buildTeam function was called. Buildteam actually contained a function inside of it called getHTML. These two functions inserted the user's input into the templates I had written out for the employee cards, then inserted those cards into the main html file. Readfile and writefile were used for this, as well as a .replace method which replaced placeholders with data from teamMembers array.

