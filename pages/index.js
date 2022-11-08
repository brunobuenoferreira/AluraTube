import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estiloDaHomePage = { 
        //backgroundColor: "red"
    }

    return (
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
                <Menu />
                <Header />
                <Timeline playLists={config.playLists}>
                Conteudo
                </Timeline>
            </div>
        </>
    );
}
  
export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header(){
    return (
        <StyledHeader>
            {/*<img src="banner"/> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div> 
                <h2>
                {config.nome}
                </h2>
                <p>
                {config.job}
                </p>
                </div>
            </section>
            
        </StyledHeader>
    )
}

function Timeline(propriedades){
    const playListsNames = Object.keys(propriedades.playLists);
    //Statment
    //Retorno por expressao
    return (
        <StyledTimeline>
            {playListsNames.map((playListsName) => {
                const videos = propriedades.playLists[playListsName];
                console.log(videos);
                return (
                    <section>
                        <h2>{playListsName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}