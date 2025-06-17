import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>

      <UserInfo user={user} />
      <CommentList comments={comments} />
    </div>
  );
};
