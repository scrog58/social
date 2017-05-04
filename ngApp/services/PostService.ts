class PostService {
  private POST_RESOURCE = this.$resource('/api/v1/posts');

  constructor(private $resource) {}

  public getAllPosts() {
    return this.POST_RESOURCE.query();
  }
}

angular.module('social').service('postService', PostService);
