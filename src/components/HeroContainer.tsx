import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

const HeroImage = styled.img`
    width: 100%;
`;

// 종이의 집 로고 https://occ-0-3072-2218.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABfFrsCd7KXswt9jLbuBLhOB2zIGidNPC7npWxCZRuFYttS18Oa10Wlyi69-DlTLyyUHkGhBQCN6GGQsxpP0fvjIfIVYsqFGaSesYSy3m0H8Nn9N9BaknBkMs8Ocusilh9_5hwJojuCHhYog8gfzDJOuAIW17q0YN7H3-JMgia3m2NA.webp?r=4d4

const HeroContainer = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <HeroImage
                        src="https://occ-0-3072-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaHLTaNoUZKtnJCVSGg0rn8X4zsyr4hjUM4T0PRIEi0bYQwXKXl_CeiTQmSsbR8oVcwA0xUJ12KzFGvE_hmh6cU9-MjO.webp?r=2c7"
                        alt="LA CASA DE PAPEL" />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroContainer;