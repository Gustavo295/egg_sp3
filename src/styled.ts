import styled from "styled-components";

export const HeaderCabec = styled.header`
  .header {
    font-size: 20px;
    color: #111;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px double gray;
  }
  .title {
    padding-top: 30px;
  }

  .brand {
    display: flex;
    gap: 40px;
  }
  .logo,
  .profile {
    padding: 5px;
    width: 120px;
  }
`;
