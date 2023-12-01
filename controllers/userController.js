// Imports the 'User' and 'Thought' models from the "../models" directory
const { User, Thought } = require("../models");

// Controller for handling CRUD operations related to users
const userController = {
  // Retrieves all users from the database, populating thoughts and friends for each user
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Retrieves a single user based on the provided user ID, populating thoughts and friends
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Creates a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Updates an existing user based on the provided user ID
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with this ID" });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Deletes a user based on the provided user ID, along with associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      // Deletes thoughts associated with the user
      await Thought.deleteMany({ _id: { $in: user.thoughts } });

      return res.status(200).json({
        message: "User and associated thoughts and reactions deleted!",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Adds a friend to a user's friend list
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      return res.status(200).json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Deletes a friend from a user's friend list
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: "Check user and friend ID" });
      }

      return res.status(200).json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

// Exports the userController for use in other parts of the application
module.exports = userController;