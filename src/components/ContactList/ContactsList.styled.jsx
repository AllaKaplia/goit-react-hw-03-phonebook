import styled from '@emotion/styled';

export const ContactsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 auto;

    max-width: 800px;
    border: 1px solid greenyellow;
`;

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    &:last-child {
        border-bottom: none;
    }
`

export const RemoveBtn = styled.button`
    background-color: #fff;
    color: #850c0c;
    border: 1px solid #850c0c;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #850c0c;
        color: #fff;
    }
`;