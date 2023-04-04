
/* definition of the User class */
class User {
  name;
  password;
  userId;

  constructor(userId, name, password) {
    this.userId= userId;
    this.name = name;
    this.password = password;
  }

  getUserId(){
    return userId;
  }
  
  getName() {
    return this.name;
  }

  getPassword(){
    return this.password;
  }

  updatePassword(newPassword){
    this.password = newPassword;
  }
}


/* creating a user entity */
let user = new User('id-000','bob','15242');

console.log(user);
console.log(user.getPassword());

/* changing the state */
user.updatePassword("bla111");
console.log(user.getPassword());

