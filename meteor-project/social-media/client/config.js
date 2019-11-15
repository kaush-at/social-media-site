// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY'
// });
Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user', 'repo']
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
