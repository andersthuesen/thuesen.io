import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styled, { css } from "styled-components";
import { Container, Content } from "../components/content";
import { DefaultLayout } from "../components/layout";
import { ScrollNotice } from "../components/scroll-notice";
import {
  Heading,
  LargeParagraph,
  Paragraph,
  SubHeading,
} from "../components/typography";

const HighlightingLargeParagraph = styled(LargeParagraph)`
  transition: color 200ms;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Highlight = styled.span`
  color: white;
`;

const AboutSection = styled.section`
  @keyframe fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeInUp 200ms linear;
  margin: 2rem 0;
`;

const AbountDescription = styled.div`
  @media (min-width: 960px) {
    padding: 0 5rem;
    transform: translateY(-5rem);
  }
`;

const MantraSection = styled.section`
  background-color: #111;
  color: white;
  padding: 5rem 0;
  margin: 2rem 0;
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 0.13068977591036413) 0%,
    rgba(255, 178, 12, 0.08867296918767509) 100%
  );
  background: radial-gradient(
    circle,
    rgba(51, 34, 195, 0.13068977591036413) 0%,
    rgba(255, 12, 182, 0.08867296918767509) 100%
  );
  background: linear-gradient(
    300deg,
    rgba(51, 34, 195, 0.13068977591036413) 0%,
    rgba(255, 12, 182, 0.08867296918767509) 100%
  );
`;

const AwardsSection = styled.section``;

const AwardsDescription = styled.div``;

const Awards = styled.div`
  @media (min-width: 960px) {
    padding: 2rem 0;
    padding-bottom: 10rem;
    & article:nth-child(even) {
      text-align: right;
    }
  }
`;

const Award = styled.article`
  margin: 2rem 0;
  @media (min-width: 960px) {
    align-self: flex-start;
    max-height: 250px;
  }
`;

const AppearancesSection = styled.section`
  background-color: white;
  color: black;
`;

const CompetenciesSection = styled.section``;

const Competencies = styled.div`
  @media (min-width: 960px) {
    display: flex;
    margin: 0 -2rem;
  }
`;

const Competency = styled.div`
  margin: 2rem 0;
  @media (min-width: 960px) {
    flex: 1;
    padding: 2rem;
    margin: 0;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Anders Thuesen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <AboutSection>
          <Container>
            <Content>
              <Image
                src="/me.jpg"
                width={384}
                height={512}
                alt="Picture of me in front of a blossoming tree."
              />
              <AbountDescription>
                <HighlightingLargeParagraph>
                  Hi, my name is Anders Thuesen. I{"'"}m a software and machine
                  learning engineer from Denmark striving to solve large scale
                  problems with <Highlight>empathy and technology</Highlight>.
                </HighlightingLargeParagraph>
              </AbountDescription>
            </Content>
          </Container>
        </AboutSection>
        <CompetenciesSection>
          <Container>
            <Content>
              <Heading>Competencies</Heading>
              <Competencies>
                <Competency>
                  <SubHeading>Frontend</SubHeading>
                  <Paragraph>
                    React (Native) / Apollo / Gatsby / Next.js /
                    styled-components
                  </Paragraph>
                </Competency>
                <Competency>
                  <SubHeading>Backend</SubHeading>
                  <Paragraph>
                    GraphQL / Express / FastAPI / gRPC / AWS / Google Cloud /
                    Kubernetes
                  </Paragraph>
                </Competency>
                <Competency>
                  <SubHeading>Machine Learning</SubHeading>
                  <Paragraph>
                    PyTorch / scikit-learn / Image segmentation / Audio
                    fingerprinting
                  </Paragraph>
                </Competency>
              </Competencies>
            </Content>
          </Container>
        </CompetenciesSection>
        {/* <ScrollNotice /> */}
        <AwardsSection>
          <Container>
            <Content>
              <Heading>Awards</Heading>
              <Awards>
                <Award>
                  <Image
                    src="/danish-design-awards.jpg"
                    width={500}
                    height={300}
                    objectFit="cover"
                    alt="Danish Design Award winners with golden D prize cups."
                  />
                  <AwardsDescription>
                    <Paragraph>
                      Danish Design Awards 2019 <br /> Winner of Peoples Choice
                    </Paragraph>
                  </AwardsDescription>
                </Award>
                <Award>
                  <Image
                    src="/venture-cup.jpg"
                    width={500}
                    height={300}
                    objectFit="cover"
                    alt="SubReader team holding a check of 100.000 danish kroner."
                  />
                  <AwardsDescription>
                    <Paragraph>
                      Venture Cup Denmark 2020 <br /> Winner with SubReader
                    </Paragraph>
                  </AwardsDescription>
                </Award>
                <Award>
                  <Image
                    src="/hack-the-crisis.png"
                    width={500}
                    height={300}
                    objectFit="cover"
                    alt="CovidGuard team on video call during Hack the Crisis."
                  />
                  <AwardsDescription>
                    <Paragraph>
                      Hack the Crisis Hackathon <br /> Winner in Saving lives
                    </Paragraph>
                  </AwardsDescription>
                </Award>
              </Awards>
            </Content>
          </Container>
        </AwardsSection>
        <MantraSection>
          <Container>
            <Content>
              <SubHeading>Mantra</SubHeading>
              <LargeParagraph>
                I believe that great user experience is a result of obsessively
                trying to understand peoples needs combined with cutting edge
                tech.
              </LargeParagraph>
            </Content>
          </Container>
        </MantraSection>
        {/* <AppearancesSection>
          <Container>
            <Content>
              <SubHeading>Appearances</SubHeading>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-1d9uNLn0bc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Content>
          </Container>
        </AppearancesSection> */}
      </DefaultLayout>
    </>
  );
}
