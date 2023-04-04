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

  
class Users {
	
    users;
    lastId;

	constructor() {
      this.users = new Map()
      this.lastId = 0;
	}

	registerNewUser(name, pwd){
      this.lastId++;
		  console.log("Registering new user: " + name + " with id: " + this.lastId);
      const userId = "id-" + this.lastId;
		  this.users.set(userId, new User(userId, name, pwd));
      return userId;
	}

	getUserById(id){
		return this.users.get(id)
	}

    getAllUsersId(){
		return Array.from(this.users.keys())
	}
}


let users = new Users();
const id1 = users.registerNewUser("bob", "pwd555");
const id2 = users.registerNewUser("alice", "pwd363");
console.log(id1);
console.log(id2);
console.log(users.getAllUsersId());

let user = users.getUserById(id1);
console.log(user.getPassword());

/* requesting a not registered user... */
let user2 = users.getUserById("id-0004");
console.log(user2);
