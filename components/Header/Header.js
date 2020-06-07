import Link from "next/link";

const linkStyle = {
    marginRight: 15
}
const container = {
    background: '#0d487b',
    padding: '5px 20px',
    position: 'fixed',
    top: '0',
    width: '100%'
}
const Header = () => (
    <div style={container}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;