import React, { useState, SyntheticEvent } from 'react';
import styled from 'styled-components';
import NetflixLogo from '../assets/logo.png';
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import { Search } from '@styled-icons/heroicons-solid/Search';
import { Gift } from '@styled-icons/boxicons-regular/Gift';
import { NotificationsNone } from '@styled-icons/material-rounded/NotificationsNone';
import { TriangleDown } from "@styled-icons/octicons/TriangleDown";
import Avater from '../assets/avatar.svg';

import { NavList } from '../constants/index';

const CustomRow = styled(Row)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.520045518207283) 63%, rgba(255,255,255,0) 0100%);
    padding: 0 60px;
    height: 41px;
    ${ media.md`
        height: 68px;
    ` }
`;

const LeftHeader = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const Logo = styled.a`
    display: inline-block;
    width: 110px;
    height: 100%;
`;

const LogoImage = styled.img`
    width: 110px;
`;

const NavContainer = styled.ul`
    padding-inline-start: 40px;
`;

const NavItem = styled.li`
    display: inline-block;
    margin-left: 20px;
`;

const NavClickableItem = styled.a`
    font-size: ${ props => props.theme.fontSize.nav};
    font-weight: ${ (props: { isCurrent?: boolean; }) => props.isCurrent ? 900 : 500};
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: white;
    vertical-align: middle;
`;

const RightHeader = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ProfileAvatar = styled.img`
    width: 40px;
`;

const StyledTriangle = styled(TriangleDown)`
    height: 40px;
    margin-left: 4px;
    vertical-align: top;
`;

const HeaderContainer = () => {

    const [ route, setRoute ] = useState('홈');

    const onClick = (item: string, e: SyntheticEvent) => {
        e.preventDefault();
        setRoute(item);
    };

    return (
        <Container fluid>
            <CustomRow
                justifyContent={ 'between' }>
                <Col col={ 5 }>
                    <LeftHeader>
                        <Logo
                            aria-label="Netflix"
                            href="/">
                            <LogoImage
                                src={ NetflixLogo }
                                alt="NETFLIX LOGO"></LogoImage>
                        </Logo>
                        <NavContainer>
                            { NavList.map((item: string): React.ReactElement => {
                                return (
                                    <NavItem
                                        key={ item }>
                                        <NavClickableItem
                                            isCurrent={ route === item }
                                            href="#"
                                            role="button"
                                            onClick={ (e) => {
                                                onClick(item, e);
                                            } }>{ item }</NavClickableItem>
                                    </NavItem>
                                );
                            }) }
                        </NavContainer>
                    </LeftHeader>
                </Col>
                <Col col={ 2 }>
                    <RightHeader>
                        <ul>
                            <NavItem>
                                <NavClickableItem>
                                    <Search size="20" />
                                </NavClickableItem>
                            </NavItem>
                            <NavItem>
                                <NavClickableItem>{ '키즈' }</NavClickableItem>
                            </NavItem>
                            <NavItem>
                                <NavClickableItem>
                                    <Gift size="20" />
                                </NavClickableItem>
                            </NavItem>
                            <NavItem>
                                <NavClickableItem>
                                    <NotificationsNone size="20" />
                                </NavClickableItem>
                            </NavItem>
                            <NavItem>
                                <NavClickableItem>
                                    <ProfileAvatar src={ Avater } alt="프로필 이미지" />
                                    <StyledTriangle size="12" />
                                </NavClickableItem>
                            </NavItem>
                        </ul>
                    </RightHeader>
                </Col>
            </CustomRow>
        </Container>
    );
};

export default HeaderContainer;