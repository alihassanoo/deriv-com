import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { binary_url } from 'common/utility'
import device from 'themes/device'
import Platform from 'images/common/interim-bg.png'

const Section = styled(Box)`
    background-image: url(${Platform});
    width: 100%;
    background-size: cover;
    position: relative;

    @media (max-width: 1375px) {
        background: white;
    }
    @media ${device.mobileL} {
        display: none;
    }
`

const AbsoluteWrapper = styled(Box)`
    margin-bottom: -5.4rem;

    @media (max-width: 1375px) {
        display: none;
    }
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const RightFlex = styled(Flex)`
    @media (max-width: 1375px) {
        ${Header} {
            color: var(--color-black);
        }
        ${FitButton} {
            border: 2px solid var(--color-red);
            color: var(--color-red);
            background: transparent;

            &:hover {
                background-color: var(--color-red);
                color: var(--color-white);
            }
        }
    }
`

const White = styled(Header)`
    color: var(--color-white);
    width: auto;
    max-width: 38.4rem;
`

const query = graphql`
    query {
        smarttrader: file(relativePath: { eq: "smarttrader.png" }) {
            ...fadeIn
        }
    }
`

const HeroDeriv = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Section bg="var(--color-black)" p="3.6rem 0 5.4rem">
                <Container jc="space-around">
                    <Flex fd="column">
                        <Header as="h3" mb="4rem">
                            {localize('Be among the first to try Deriv')}
                        </Header>
                        <FitButton secondary to="dtrader">
                            {localize('Visit Deriv now')}
                        </FitButton>
                    </Flex>
                    <AbsoluteWrapper>
                        <QueryImage data={data['smarttrader']} width="54rem" height="27.5rem" />
                    </AbsoluteWrapper>

                    <RightFlex fd="column" ml="2.4rem" ai="flex-start">
                        <White as="h3" mb="3rem">
                            {localize('Love trading on Binary.com’s signature platform? ')}
                        </White>
                        <FitButton
                            external
                            white
                            to={binary_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {localize('Try SmartTrader on Deriv')}
                        </FitButton>
                    </RightFlex>
                </Container>
            </Section>
        </>
    )
}

export default HeroDeriv
