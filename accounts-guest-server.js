Accounts.removeOldGuests = function (before) {
  if (typeof before === 'undefined') {
    before = new Date();
    before.setHours(before.getHours() - 1);
  }
  return Meteor.users.remove({createdAt: {$lte: before}, 'profile.anon': 'anon'});
};