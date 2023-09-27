class PersonClass {
    constructor(firstName,age, email,phoneNum) {
      this.firstName = firstName;
      this.age = age;
      this.email = email;
      this.phoneNum=phoneNum
    }
  
    showDetails() {
      console.log('Full Name:', this.firstName);
      console.log('Age:', this.age);
      console.log('Email:', this.email);
      console.log('Mobile Number:', this.phoneNum);
    }
  }
  
  // Creating instances of the class for every user
  const user1 = new PersonClass('Siva', 26, 'siva@gmail.com','9080876567');
  const user2 = new PersonClass('Priya', 20, 'priya@gmail.com','8767543456');
  const user3 = new PersonClass('Madhu', 20, 'madhu@gmail.com','8767543456');
  const user4 = new PersonClass('Siraj', 30, 'siraj@gmail.com','8767543456');
  const user5 = new PersonClass('Aravinth', 24, 'aravinth123@gmail.com','8767543456');
  
  // Displaying details of every users
  user1.showDetails();
  user2.showDetails();
  user3.showDetails();
  user4.showDetails();
  user5.showDetails();


  