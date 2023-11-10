import styled from 'styled-components'

export const Container = styled.div`

    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;

    ul {
        width: 30rem;
        border-radius: 8px;
        margin: 5px;
        border: 2px solid #000;
        background-color: #ebecf0;
        padding-left: 0;

        h3 {
            text-align: center;
            color: #000;
            font-weight: 700;
        }

        li {
            padding: 1rem 2rem;
            color: var(--text-body);
            background-color: #fff;
            border: 0;
            border-radius: 8px;
            margin: 10px;
            border: 2px solid #000;
            list-style: none;
            display: flex;
            justify-content: space-between;

        }
    }
`
