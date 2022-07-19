import { NextPage } from "next";

export const Page: NextPage = () => (
    <main>
        <h1>Informatics</h1>
        <ol>
            <li><a href="#preamble">Преамбула</a></li>
            <li><a href="#history">История</a></li>
            <li><a href="#actuality">Текущее положение дел</a></li>
            <li><a href="#app">XDE.App</a></li>
            <li><a href="#imperative">Императивное и декларативное</a></li>
            <li><a href="#abstractions">Абстракции</a></li>
            <li><a href="#categories">Категории и континуум</a></li>
            <li><a href="#procedures">Процедуры</a></li>
            <li><a href="#storage">Хранение информации</a></li>
        </ol>

        <h2 id="preamble">Преамбула</h2>
        <p>
            В современном мире намечается тенденция создавать всё новые и новые решения, когда
            существующие чем-то не устраивают. Десятки языков программирования, систем управления
            базами данных, фреймворков и библиотек. Похожая картина сложилась и в области ИТ.
            Десятки дисциплин и должностей, среди обилия которых не всегда удаётся понять, кто
            же ты? Программист или инженер ПО, системный архитектор или разработчик решений
        </p>

        <p>
            Парадокс в том, что сам ИТ, сообразно с теми принциами хорошего дизайна и архитектуры,
            которые он пропагандирует и несёт через многие области человеческой деятельности, отнюдь
            не в восторге от того, что с ним происходит.
        </p>

        <p>
            Данное исследование ставит своей задачей использовать то, что уже есть, улучшить и
            переосмыслить такую дисциплину как информатика с учётом современных реалий. Попытаться
            разработать целостную и эффективную образовательную программу, которая сделала бы
            информатику таким же хорошим фундаментом для изучения других наук, как её реализация
            в виде Computer Science является мощным подспорьем в автоматизации этих самых наук.
        </p>

        <p>
            TODO:Своеобразный принцип экологии кода. Призывающий минимизировать отходы. Скорее
            всего, если провести вычисления, то общий оверхед дублирубщегося кода и данных на
            планете исчислялся бы миллиардами долларов убытка. Идея LZCode.
        </p>

        <h2>История</h2>
        <p>
            TODO:
        </p>

        <h2 id="actual">Текущее положение дел</h2>
        <p>
            TODO: Стоит проанализировать существующую литературу и учебные программы.
        </p>

        <h2 id="app">XDE.App</h2>
        <p>
            XDE.app разрабатывается в процессе образования и как помощник для образования.
            Для начала можно сделать простую систему флеш-карт, которая будет способствовать
            запоминанию полученной информации. И заодно поможет работать со знаниями.
        </p>

        <p>
            В целом такой рекурсивный подход, мы затачиваем инструмент, чтобы нам с каждым шагом
            было всё проще и проще (пила Линкольна). Это выглядит гораздо интереснее, чем стандартное
            образование.
        </p>
            
        <p>
            В качестве кандидата хорошо смотрится Rust. Помимо широты применения нас могут
            заинтересовать его макросы. Чтобы мы могли создавать и использовать самые разные
            языки, включая разработку Cx.
        </p>

        <h2 id="imperative">Императивное и декларативное</h2>
        <p>
            Императивное и декларативное мышление у учащихся. Изучение алгоритмов. Важность
            постановки задачи.
        </p>

        <h2 id="abstractions">Абстракции</h2>
        <p>
            Угадываем общие формы в объектах. Нарисованный кубик и реальный кубик. Может удастся
            прикрутить неопределённый и определённый артикль, как одну из самых спорных тем.
        </p>

        <h2 id="categories">Категории и континуум</h2>
        <p>
            Хорош пример с оценками и цветами.
        </p>

        <h2>Подсистемы</h2>
        <p>
            Выделение подсистем. В человеческом теле, в доме, в OSI, слои в контейнерах, слои в
            программных решениях.
        </p>

        <h2 id="procedures">Процедуры</h2>
        <p>
            TODO:Концепция процедур/функций в реальности и в коде. Параллели. Параметризация.
            Фабула того, что мы каждую минуту пишем программы.
        </p>
        <p>
            Процедура «приготовить еду», внутри которой процедура «положить что-то на сковородку».
            Этим что-то она параметризуется.
        </p>

        <h2 id="storage">Хранение информации</h2>
        <p>
            Тема баз данных часто начинается с изучения реляционных моделей и SQL.
            Что в дальнейшем вызывает немало проблем, когда на поверхность всплывают детали
            реализации и возникают такие термины как &laquo;кластерный индекс&raquo;, &laquo;план
            выполнения запроса&raquo; и другие. Также сюрпризом становится и NoSQL-направление и
            подбор наиболее эффективной реализации для конкретной задачи (колоночные, KV, ...).
        </p>
        <p>
            С другой стороны, вопрос организации хранилиз выглядит интуитивно понятным и подходящи
             для рассмотрения на языке бытовых примеров. В качестве демонстрации можно взять обычные
             стеллажи с полками. Полка может рассматриваться как страница (большинство СУБД на нижнем
             уровне оперируют страницами данных). Физическое упорядочивание как кластерный индекс, из
             чего логично следует невозможность создать два кластреных индекса. Блокнот, где
             содержимое полок отсортировано по другому параметру - простой индекс. Задача разместить
             новый предмет на заполненных полках, где всё уже было упорядочено, может показать
             проблему &laquo;page split&raquo;. На примере нескольких комнат со стеллажами можно
             описать партиционирование.
        </p>
        <p>
            Дополнительно подчеркнуть, что это не только вопросы цифрового мира. С ними можно
            столкнуться и в реальности. Например, проблемы в гуманитарных с центрах, с которыми
            столкнулся автор. Этот же пример может продемонстрировать желание создать много индексов
            (скажем, для одежды - пол, рост, возраст, цвет, вид, время года и т.п.) и тем самым
            показать, какие сложности возникают при росте количества индексов.
        </p>
        <p>
            Даже ребёнок может организовывать лучше пространство вокруг себя, пользуясь этими
            принципами.
        </p>
    </main>
);

export default Page;