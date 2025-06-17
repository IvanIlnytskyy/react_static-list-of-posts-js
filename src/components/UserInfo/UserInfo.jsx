import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  return (
    <div className="user">
      <p className="user__name">{user.name}</p>
    </div>
  );
};
