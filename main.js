function personFactory(firstName, lastName, age, id) {
  return {
    firsName: firstName,
    lastName: lastName,
    age: age,
    id: id,

    getFullName() {
      return "Mr." + this.firsName + " " + this.lastName;
    },
  };
}

function employeeFactory(firstName, lastName, age, id, baseSalary) {
  let rate = 50;

  function calculateExtraIncome(overTime) {
    return rate * overTime + 10;
  }

  const personObject = personFactory(firstName, lastName, age, id);
  const employeeObject = {
    baseSalary: baseSalary,
    overTime: 0,

    getFinalSalary() {
      return this.baseSalary + calculateExtraIncome(this.overTime);
    },

    calcTax() {
      return this.baseSalary * 0.1;
    },
  };

  return Object.assign(personObject, employeeObject);
}

function bossFactory(firstName, lastName, age, id) {
  const personObject = personFactory(firstName, lastName, age, id);
  const bossObject = {
    role: "Manager",
    calcTax() {
      return 20000;
    },
  };

  return Object.assign(personObject, bossObject);
}

const alireza = employeeFactory("Alireza", "Molaee", 27, "86153485134", 10000);
const abbas = bossFactory("Abbas", "Boazar", 20, "612846124");

console.log(abbas);
console.log(alireza);

console.log(abbas.getFullName(), abbas.calcTax());
console.log(alireza.getFullName(), alireza.calcTax());
