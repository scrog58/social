class UserService {
  private USER_RESOURCE = this.$resource('/api/v1/users/:id/:action');

  constructor(private $resource) {}

  public login(username, password) {
    return this.USER_RESOURCE.save({id: 'login'}, {password: password, username: username}).$promise;
  }

  public getPostsByUserId(userId) {
    return this.USER_RESOURCE.query({id: userId, action: 'posts'});
  }
}

angular.module('social').service('userService', UserService);
