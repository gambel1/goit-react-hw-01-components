import styled from "@emotion/styled";

export const FriendListLi = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  /* border: 1px solid black; */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 60px;
  padding: 0 5px;
`;

export const FriendListIconOnline = styled.span`
  background-color: green;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const FriendListIconOffline = styled.span`
  background-color: red;
  border-radius: 50%;
  width: 15px;
  height: 15px;

`;


