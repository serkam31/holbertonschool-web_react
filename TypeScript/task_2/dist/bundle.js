/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500)
        return new Teacher();
    else
        return new Director();
}
function isDirector(employee) {
    return "workDirectorTasks" in employee;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVdBO0lBQUE7SUFZQSxDQUFDO0lBWEcsK0JBQVksR0FBWjtRQUNJLE9BQU8sbUJBQW1CO0lBQzlCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyx3QkFBd0I7SUFDbkMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNJLE9BQU8sMkJBQTJCO0lBQ3RDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBWEcsOEJBQVksR0FBWjtRQUNJLE9BQU8sdUJBQXVCO0lBQ2xDLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksT0FBTyxxQkFBcUI7SUFDaEMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQWlCO0lBQzVCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXdCO0lBQzVDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHO1FBQzFDLE9BQU8sSUFBSSxPQUFPLEVBQUU7O1FBRXBCLE9BQU8sSUFBSSxRQUFRLEVBQUU7QUFDN0IsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzVDLE9BQU8sbUJBQW1CLElBQUksUUFBUSxDQUFDO0FBQzNDLENBQUM7QUFDRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUM3QyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN0QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtLQUN0QztTQUNJO1FBQ0QsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7S0FDckM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZXtcbiAgICB3b3JrRnJvbUhvbWUoKSA6IHN0cmluZ1xuICAgIGdldENvZmZlZUJyZWFrKCkgOiBzdHJpbmdcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpIDogc3RyaW5nXG59XG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZXtcbiAgICB3b3JrRnJvbUhvbWUoKSA6IHN0cmluZ1xuICAgIGdldENvZmZlZUJyZWFrKCkgOiBzdHJpbmdcbiAgICB3b3JrVGVhY2hlclRhc2tzKCkgOiBzdHJpbmdcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiXG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIlxuICAgIH1cblxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCJcbiAgICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiXG4gICAgfSBcblxuICAgIGdldENvZmZlZUJyZWFrKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCJcbiAgICB9XG5cbiAgICB3b3JrVGVhY2hlclRhc2tzKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIlxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5IDogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDApXG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gbmV3IERpcmVjdG9yKClcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICAgIHJldHVybiBcIndvcmtEaXJlY3RvclRhc2tzXCIgaW4gZW1wbG95ZWU7XG59XG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogc3RyaW5nIHtcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9