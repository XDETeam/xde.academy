---
title: All-as-a-Code
---

В индустрии ИТ сложилась парадоксальная ситуация. Не смотря на десятки лет опыта в автоматизации других
сфер деятельности, конкретно ИТ оказалось одним из наиболее ущербных направлений, непростительно долгое
время обходясь без автоматизации тестирования, автоматизации развёртывания и конфигурирования. А сколько
ещё подобных областей оказались без внимания.

Если использование ИТ создаёт такие преимущества в других областях, да и само оно существенно выигрывает
от автоматизации, то почему надо каждый раз, встречаясь с очередным подходом вроде Infrastructure-as-a-Code,
воспринимать его как нечто новое и уникальное, если логичнее рассмотреть конепцию All-as-a-Code, что всё
должно быть кодом.

## Specs

Эта идея &ndash; не просто риторическая модель. Она имеет вполне конкретное воплощение в виде модели
организации программных решений.

Представим себе, что мы начинаем разработку продукта с простого CLI-приложения с условным названием
"specs". По мере того как идёт анализ предметной области, мы добавляем в него документацию и расширяем
приложение до простого веб-сервера, которое хостит эту документацию. Теперь запустив, например,
`specs docs` мы можем осуществлять навигацию по собранной информации.

Формируя команду и общаясь с представителями закачика мы формируем в этом же приложении список
участников с указанием соответствующих ролей и контактов. Теперь мы можем проинфорировать всех
о некотором событии, запустив `specs notify --role `.

Постепенно у нас может происходить формализация предметной области, и в этом же приложении мы можем
начинать определять соответствующие типы, функции, классы и другие артефакты. Тут же для них могут
описываться тесты, которые сразу могут стать как частью команды `specs docs`, так и некоторой
`specs test`.

Постепенно, по мере кристаллизации кода, отдельные его части будут выделяться в специализированные
библиотеки. При этом основное приложение "specs" будет включать их в свои зависимости, таким образом
имею доступ ко всей картине решения.

> Одна программа, что правит всеми (c) почти "Властелин колец"

Когда вы понимаете, какое вспомогательно ПО будете использовать (СУБД, messaging platforms и другие),
вы непосредственно в коде формируете соответствующие объекты. Скажем, создаёте экземпляр класса
PostgresServer или AzureKubernetesCluster. Они тут же находят своё применение в самых разных задачах:
появляются в документации, участвуют в конфигурировании, развертываний, мониторинге и т.п.

Безусловно, такому решению нужен соответствующее сопровождение в виде самых разных библиотек, но они
всё равно хаотично развиваются в различных узких областях, будучи лишены общей скоординированной
концепции.

### Преимущества

TODO:Source of Truth. Как пример с описанным сервером. Один SoT и множество отражений &ndash; одна
из ключевых идей повторного использования в ИТ (DRY = Don't repeat yourself).

### Интеграция

- TODO:Confluence, JIRA и т.п.
- TODO:Частью specs-приложения может быть и база данных. В том числе федерация из различных источников
(JIRA, ...), благодаря которое реальный код и продукты, скажем, внешних коммуникаций могут
синхронизироваться.

---

## Реализация

### Командный контур

TODO: Предусмотреть декларативное описание командного контура приложения, поскольку мы можем захотеть
им управлять как в стиле CLI, так и через REST API, веб-интерфейс и т.п.
