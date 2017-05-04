namespace social.Controllers {

  export class FriendController {
    public posts;

    constructor(private userService, private $stateParams) {
      this.posts = userService.getPostsByUserId($stateParams.id);
    }
  }

    export class HomeController {
      public posts;

      constructor(private postService) {
        this.posts = postService.getAllPosts();
      }
    }


    export class AboutController {
      public username;
      public password;
      public posts;

      constructor(private userService, private postService) {}

      public login() {
        this.userService.login(this.username, this.password)
          .then((user) => {
            this.userService.getPostsByUserId(user._id).$promise
              .then((posts) => this.posts = posts)
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }
    }

}
