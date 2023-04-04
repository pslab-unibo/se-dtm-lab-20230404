let user0 = {
    name: "bob",
    password: "pwd555",
    userId: "id-001"
}

let user1 = {
    name: "maria",
    password: "pwd0444",
    userId: "id-002", 
    updatePassword: function(newPassword){
        this.password = newPassword;
    }
}

console.log(user0);
console.log(user1);
user1.updatePassword("XXX");
console.log(user1);
