import styled from '@emotion/styled'
import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'
import { breakpointHeightM, breakpointWidthM } from '../styles/devices'

export const Ul = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    align-self: end;
    @media (max-height: ${breakpointHeightM}) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        gap: 0.5em;
    }
`

export const Li = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    gap: 0.5em;
    font-size: 1.5em;
    border-radius: 0.2em;
    padding: 0.2em 0.5em;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.purple};
    margin-bottom: 1em;
    @media (max-width: ${breakpointWidthM}) {
        justify-content: space-between;
    }
    @media (max-height: ${breakpointHeightM}) {
        margin-bottom: 0;
    }
`

export const Link = styled.a(props => ({
    '--color': 'inherit',
    fontWeight: 'bold',
    color: 'var(--color)',
    textDecoration: 'none',
    ':visited': {
        color: 'var(--color)',
        textDecoration: 'none'
    },
}))

interface LinkLike {
    icon: IconType
    href: string
    label: string | JSX.Element
}

const links: LinkLike[] = [
    {
        icon: AiOutlineInstagram,
        href: 'https://www.instagram.com/nao_victoria/',
        label: '@nao_victoria'
    },
    {
        icon: AiFillFacebook,
        href: 'https://www.facebook.com/Nao-Victoria-110178208177853/',
        label: 'Nao Victoria'
    },
    {
        icon: AiFillYoutube,
        href: 'https://www.youtube.com/channel/UC3FCJ28XsQ_1WmKCzFjkhqQ',
        label: 'Nao Victoria'
    },
    {
        icon: FiMail,
        href: 'mailto:naovictoriamusic@gmail.com',
        label: <span style={{ fontSize: '0.7em', lineHeight: '2em' }}>naovictoriamusic@gmail.com</span>
    }
]

export default function Social() {
    return <Ul>
        {
            links.map(link => (
                <>
                    <Li>
                        <Link href={link.href}>{link.label}</Link>
                        {link.icon({ color: 'inherit', size: '1.5em' })}
                    </Li>
                </>
            ))
        }
    </Ul>
}