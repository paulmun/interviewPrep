"use strict";

class CallCenter{
    constructor(){
        this.employees = {
            respondent: [],
            manager: [],
            director: []
        };
    }

    dispatchCall(){
        for (let level in this.employees) {
            for (var i = 0; i < this.employees[level].length; i++) {
                if (this.employees[level][i].status === 'available') {
                    this.employees[level][i].status = 'busy';
                    return this.employees[level][i].name + ' has taken the call';
                }
            }
            console.log('All ' + level + 's are busy...escalating call');
        }
        return 'All Call Center personel are currently busy, please hold';
    }

    hireEmployee(employee){
        if (!employee.title) {
            return 'We can only hire employees!';
        } else {
            this.employees[employee.title].push(employee);
        }
    }
}

class Employee{
    constructor(name, title){
        this.name = name;
        this.title = title;
        this.status = 'available';
    }
}

let call = new CallCenter;
call.hireEmployee(new Employee('Paul', 'director'));
call.hireEmployee(new Employee('Jon', 'respondent'));
call.hireEmployee(new Employee('Christian', 'manager'));
call.hireEmployee(new Employee('Jim', 'respondent'));
call.hireEmployee(new Employee('Steven', 'respondent'));
call.hireEmployee(new Employee('Omar', 'manager'));
call.hireEmployee(new Employee('Pablo', 'director'));
call.hireEmployee(new Employee('George', 'manager'));

console.log(call.employees);
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.dispatchCall());
console.log(call.employees);