import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

export const PostList = ({ posts }) => {
  const { url, path } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} url={url} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Switch>
          <Route exact path={path}>
            <NoPostSelectedMessage />
          </Route>
          <Route path={`${path}/:postId`}>
            <Post posts={posts} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PostList;
