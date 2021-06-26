import '../styles/home.scss'

import frontBackImg from '../assets/images/frontback.png'

export function Home() {
    return (
        <div id="container">
            <h1>Como dar o primeiro passo?</h1>
            <p>
                Certamente você já se perguntou isto, e posso afirmar, o primeiro passo é sempre
                o mais importante de todos, principalmente na área da tecnologia. 
                Então abaixo vou passar algumas dicas para quem quer iniciar neste mundo fantástico, 
                mas ainda não deu o primeiro passo e não saber por onde começar.

                <h3>	&gt; A lista abaixo vai esclarecer estas dúvidas iniciais 	&lt; </h3>

                <ol>
                    <li>Por que você quer programar?</li>
                    Sim, acredite. Este é o primeiro e mais importante passo que você pode dar na carreira
                    de programador ou programadora. Muitas pessoas querem aprender a programar pois a área de 
                    TI é muito bem remunerada e isso acaba sendo uma grande armadilha, por trás de um bom salário
                    existe uma responsabilidade enorme, anos e anos de estudo e dedicação, noites sem dormir para
                    corrigir um Bug, dias e dias lendo a documentação de uma nova tecnologia e as vezes a frustação de
                    terminar de entender uma tecnologia e em seguida vir uma nova versão cheia de novas <em>"features"</em>,
                    e adivinha? - Começar a estudar novamente. <br /> <br />
                    Após esta leitura, você acha que se encaixa em tudo? Se sua resposta foi sim, parabéns, seja
                    bem-vindo(a) a comunidade de programadores, mas você quase
                    deu o primeiro passo. QUASE? Isto mesmo, ainda falta mais um pouco, mas esta característica é fundamental.
                    Desconheco um programador que não gosta de estudar, que não passe lendo e pesquisando diariamente, agora, se 
                    você não se encaixa neste perfil, não perca seu tempo, programar exige muito de você, constantemente, 
                    diariamente... e sempre! <br />
                    <li>Em qual segmento você quer iniciar?</li>
                    Este é o final do primeiro passo, qual segmento você quer trilhar? Um programador pode conhecer e se identificar
                    com alguma das trilhas, temos os desenvolvedores FrontEnd e os BackEnd. <br /> <br />
                    <strong>FrontEnd:</strong> Este é o profissional que atua na parte visual e criação daquilo que o 
                    usuário visualiza na tela, normalmente esta pessoa trabalha com HTML, CSS e JavaScript e logo
                    passa a incorporar em seu conhecimento alguns FrameWorks como React, Vue e Angular. <br />
                    <strong>BackEnd:</strong> Este é o profissional que faz com que a integração aconteça, é ele quem 
                    consegue desenvolver soluções para que banco de dados interajam com o usuário, ou seja, o que 
                    aconteçe por baixo dos panos, as principais linguagens utilizadas para desenvolver um bom backEnd são
                    Java, Node, PHP, C#. <br /><br />
                    <img src={frontBackImg} alt="Programador FrontEnd e BackEnd" /> <br /><br />
                    <li>Decidiu qual trilha seguir? Então começe por lógica de programação</li>
                    Sério, não adianta você querer ser programador e não entender a lógica de linguagens, um exemplo muito 
                    comum em quem está começando é o medo de ver os mais experientes dizendo que tem conhecimento em tantas
                    linguagens diferentes, aí você se pergunta - Caramba, como este cara sabe tudo isso? Simples, ele sabe
                    lógica de programação. Depois que você entende bem os <em>"ifs, elses, while, for e algumas declarações"</em> fica
                    muito mais fácil ir para uma linguagem e compreender os que pode ser feita com ela. <br />
                    <strong>Não pule etapas</strong>, nunca faça isso. Um exemplo bem simples, na leitura do tópico
                    anterior você decidiu ser um desenvolver FrontEnd, então lhe disseram para estudar REACT que é fantástico.
                    Realmente o REACT é magnífico e faz coisas incríveis, mas se você não souber HTML, CSS e JavaScript puro, 
                    será pouco provável que consiga compreender ele. Então lembre <strong>não pule etapas</strong>. <br /><br />
                    <li>Vamos finalizar isto então?</li>
                    Para concluir esta breve introdução, quero que entenda uma coisa valiosa, não desanime NUNCA. Na boa, a vida
                    de desenvolver passa por muito perrenge, você vai passar por várias situações desagradáveis, passar horas lendo e 
                    tentando entender um erro que parece impossível de corrigir, mas NUNCA desanime! E sabe o que é o melhor nisto tudo? A 
                    próxima vez que acontecer este erro, você saberá como resolver e sabe onde eu estou tentando chegar? <br />
                    Senioridade, sim, que palavra linda entre os Devs, mas para ser sênior, você precisa sabe do que? De muitos erros na 
                    vida de programador e dar solução a eles, um sênior nada mais é do que um programador que consegue resolver os 
                    problemas do dia a dia de trabalho. Então amigo dev, amiga dev, desejo que tenha muitos problemas pela frente, pois o
                    pote de ouro dos salários da programação está na mão dos sêniors!
                </ol>
            </p>
        </div>
    )
}