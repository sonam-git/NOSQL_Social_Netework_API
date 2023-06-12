// Importing the required dependencies from the mongoose library
const { Schema, model, Types } = require("mongoose");

// Defining the User schema with the required fields and their respective data types
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimm: true,
    },
    // using regular expression to validate email format
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      valdate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            v
          );
        },
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // enables virtual properties to be displayed when a user document is transformed into JSON format
    },
    id: false, // disables the default '_id' field in the User model to be returned when calling toJSON() method
  });

  // Defining a virtual property 'friendCount' which returns the number of friends in the friends array
userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

// Creating the User model from the userSchema
const User = model("User", userSchema);
// Exporting the User model as a module
module.exports = User;
