/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWlCQSxJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUMzRCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsUUFBUTtBQUN6QyxDQUFDO0FBRUQ7SUFJSSxzQkFBWSxTQUFpQixFQUFFLFFBQWdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0ksT0FBTyxtQkFBbUI7SUFDOUIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTO0lBQ3pCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFthdHRyaWJ1dGUgOiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9uIHtcbiAgICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7ICAgXG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBmaXJzdE5hbWVbMF0gKyBcIi4gXCIgKyBsYXN0TmFtZVxufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgIH1cblxuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIlxuICAgIH1cbiAgICBcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0NvbnN0cnVjdG9yIHtcbiAgICBuZXcoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2V7XG4gICAgICAgIHdvcmtPbkhvbWV3b3JrKCkgOiBzdHJpbmdcbiAgICAgICAgZGlzcGxheU5hbWUoKSA6IHN0cmluZ1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9