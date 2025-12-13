import { useCounter } from '../stores/useCounter';

function Header({headerName}) {
    const { counter } = useCounter();

    return <h1>{headerName} : {counter}</h1>
}

export default Header;