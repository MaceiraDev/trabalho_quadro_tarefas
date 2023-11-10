import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--darkpurple);
    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: #fff;
    }

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-purple);
        border: 0;
        padding: 10px;
        border-radius: 4px;
        transition: 0.5s;
        &:hover {
            background-color: orange;
            color: #000;
        }

    }
`
