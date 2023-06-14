import styled from '@emotion/styled';
import { Field } from 'formik';

export const Input = styled(Field)`
    padding: 5px;
    width: 300px;
    border: 2px solid greenyellow;
    border-radius: 5px;
`;

export const ButtonAdd = styled.button`
    background-color: rgb(66, 196, 232);
    color: #000;
    border: 1px solid rgb(5, 21, 237);
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #000;
        color: #fff;
    }
`;

export const LabelForm = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const ErrorText = styled.p`
    color: red;
`;