import styled, { css } from 'styled-components';
import colours from '../../shared/colours';

const ToDoListWrapper = styled.div`
  border-radius: 5px;
  min-height: 90vh;
  width: 80%;
  display: flex;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  padding: 0.5rem;
  width: 30%;
  z-index: 1;
  box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

const SidebarProfile = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  margin: 0.5rem 0;

  img {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin-right: 0.5rem;
  }

  span {
    font-size: 1rem;
  }
`;

const DetailViewWrapper = styled.div`
  width: 100%;
  background-color: ${colours.concrete};
`;

const DetailViewHeader = styled.div`
  width: 100%;
  background: linear-gradient(rgba(73, 42, 219, 0.5), rgba(73, 42, 219, 0.5)),
    url(${process.env.PUBLIC_URL + '/desert.jpg'}) no-repeat fixed 50% 50%;
  background-size: cover;
  padding: 4rem 2rem 1.5rem;
  h1 {
    font-size: 3rem;
    font-weight: 300;
  }
  h1,
  h4 {
    color: ${colours.white};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const DetailViewContent = styled.div`
  flex: 1;
`;

const List = styled.div`
  padding: 0.5rem;
  background-color: ${colours.white};
`;

const AddToDo = styled.div`
  display: flex;
  align-items: center;
  color: ${colours.persianBlue};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 3rem;
    position: relative;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    margin-right: 0.5rem;
    color: ${colours.white};
    background-color: ${colours.persianBlue};
  }

  &:hover {
    background-color: ${colours.selago};
  }
`;

const Lists = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  flex: 1;

  li {
    background-color: ${colours.selago};
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 0.5rem 0;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Checkbox = styled.a<{ completed: boolean }>`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  margin-right: 0.5rem;
  color: ${colours.white};
  cursor: pointer;
  background-color: ${colours.fern};
  border: 1px solid ${colours.fern};

  ${(props: any) =>
    !props.completed &&
    css`
      svg {
        display: none;
      }
      background-color: ${colours.white};
      border: 1px solid ${colours.boulder};
    `}
`;

const Description = styled.input<{ completed: boolean }>`
  cursor: pointer;
  user-select: none;
  width: auto;
  flex: 1;
  padding: 0.5rem;
  margin: 0 0.5rem;
  display: inline-block;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 1.2rem;

  ${(props: any) =>
    props.completed &&
    css`
      color: ${colours.boulder};
      text-decoration: line-through;
    `}
`;

const ButtonDelete = styled.a`
  display: none;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${colours.purpleHeart};
  cursor: pointer;

  svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

const ToDoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
  background-color: ${colours.white};

  &:hover {
    background-color: ${colours.selago};

    ${ButtonDelete} {
      display: flex;
    }
  }
`;

export default {
  ToDoListWrapper,
  ToDoWrapper,
  SidebarWrapper,
  SidebarProfile,
  DetailViewWrapper,
  Lists,
  AddToDo,
  DetailViewHeader,
  DetailViewContent,
  List,
  Checkbox,
  Description,
  ButtonDelete,
};
