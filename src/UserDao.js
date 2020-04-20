const User = require("./UserModel");

class UserDao {
  findAll() {
    return await User.find({});
  }

  async findById(id) {
    const user = await User.findById(id);

    // If the user has to provide new data we can't auto rewrite like this.
    if (user.name) {
      const [first, last] = user.name.split(" ");
      user.firstName = first;
      user.lastName = last || "";
      user.name = undefined;
      return await user.save();
    }

    return user;
  }

  saveUser(props) {
    const { firstName, lastName, age, email } = props;
    new User({ firstName, lastName, age, email }).save();
  }
}

module.exports = new UserDao();
