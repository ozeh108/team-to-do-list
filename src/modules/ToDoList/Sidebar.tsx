import React from 'react';
import Styled from './ToDoList.styles';
import { connect } from 'react-redux';
import { ReactComponent as ListSVG } from '../../shared/icons/list.svg';
import { AppState } from '../../store/interfaces';

type SidebarProps = ReturnType<typeof mapStateToProps>;

const Sidebar: React.FC<SidebarProps> = ({ activeProfile, lists }) => {
  if (!activeProfile) return null;

  const { name, pic } = activeProfile;

  const listsExist = lists && !!lists.length;

  return (
    <Styled.SidebarWrapper>
      <Styled.SidebarProfile>
        <img src={pic} alt="profile pic" />
        <span>{name}</span>
      </Styled.SidebarProfile>
      {listsExist && (
        <Styled.Lists>
          {lists.map((list: any, idx: number) => {
            const { name } = list;
            return (
              <li key={idx}>
                <ListSVG />
                <span>{name}</span>
              </li>
            );
          })}
        </Styled.Lists>
      )}
    </Styled.SidebarWrapper>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    activeProfile: state.context.activeProfile,
    lists: state.lists,
  };
};

export default connect(mapStateToProps, {})(Sidebar);
