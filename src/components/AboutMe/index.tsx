import { Text } from "@/styles/Text"
import { AboutMeContainer, AboutMeContainerText, AboutMeFlex, UserImageAboutMe } from "./style"
import AboutMeImg from "../../assets/img/aboutmet.02.jpg"



export const AboutMe = (): JSX.Element => {

    return(
        <AboutMeContainer>     
            <AboutMeFlex >
                <AboutMeContainerText>
                <Text type="heading3" color="grey2">
                    Um pouco de mim
                </Text>
                 <Text type="body1" color="grey2">
                Saindo diretamente de um Studio de Tatuagem do interior de SP, para o mundo Tech! 
                Aprendi a desenhar, quando aprendi a observar e resolver os problemas de levar a dimensão 3D até uma superfície 2D, conceitos de perspectiva e profundidade!
                Atualmente estudo desenvolvimento web, aprendendo como abstrair ideias e transformá-las em programas com soluções, seguindo algumas lógicas e fluxogramas!
                Assim como no desenho, todo começo parte de projetos simples que com o tempo vão evoluindo. Aqui está meu começo!
                </Text>
                </AboutMeContainerText>
                <UserImageAboutMe src={AboutMeImg} alt="foto minha tatuando" 
                width={"248px"}
                height={"248px"}
                />
            </AboutMeFlex>               
        </AboutMeContainer>
    )
}