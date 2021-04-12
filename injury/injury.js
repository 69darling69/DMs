let injury = [
    {'Тяжесть': 'Смерть', 'd100': '1', 'Тип': 'Раздробленный череп/обезглавливание', 'Описание': 'Смерть', 'Лечение': 'Воскрешение/Реинкарнация', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Лицевая рана', 'd100': '2', 'Тип': 'Потеря глаза', 'Описание': 'Помеха на проверки Внимательности, при попытке увидеть кого-либо/что-либо, также помехи на дальнобойные атаки', 'Лечение': 'Регенерация', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Лицевая рана', 'd100': '3', 'Тип': 'Потеря носа', 'Описание': 'Помеха на проверки Харизмы и Внимательности, при попытке почуять кого-либо/что-либо', 'Лечение': 'Регенерация', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Лицевая рана', 'd100': '4', 'Тип': 'Потеря уха', 'Описание': 'Помеха на проверки Харизмы и Внимательности, при попытки услышать кого-либо/что-либо', 'Лечение': 'Регенерация', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Лицевая рана', 'd100': '5', 'Тип': 'Выпадение зубов (2d4-1)', 'Описание': 'Помеха на проверки Харизмы', 'Лечение': 'Регенерация', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Потеря конечности', 'd100': '6', 'Тип': 'Потеря руки', 'Описание': 'Можно пользоваться только одной рукой, чтобы использовать предметы/оружие', 'Лечение': 'Регенерация', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Потеря конечности', 'd100': '7', 'Тип': 'Потеря ноги', 'Описание': 'Чтобы передвинуться больше чем на 10фт в ход, требуется проверка Акробатики со СЛ 15, иначе упасть ничком', 'Лечение': 'Регенерация', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Потеря конечности', 'd100': '8', 'Тип': 'Потеря ладони', 'Описание': 'Нельзя использовать двуручное оружие или лук', 'Лечение': 'Регенерация или протез', 'Длительность': 'Навсегда', 'Дополнительно': 'Арбалет и щит - можно'},
    {'Тяжесть': 'Потеря конечности', 'd100': '9', 'Тип': 'Потеря стопы', 'Описание': 'Скорость движение делится пополам', 'Лечение': 'Регенерация или протез', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Близость смерти', 'd100': '10', 'Тип': 'Конец мучениям+', 'Описание': 'Все враги в 10фт от вас совершают спасбросок Мудрости со СЛ 10. При провале, они хотят завершить ваши мучения', 'Лечение': '-', 'Длительность': 'Пока в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Близость смерти', 'd100': '11', 'Тип': 'Конец мучениям', 'Описание': 'Атакующий совершает спасбросок Мудрости со СЛ 10. При провале, он хочет завершить ваши мучения', 'Лечение': '-', 'Длительность': 'Пока в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Близость смерти', 'd100': '12', 'Тип': 'Разрыв аорты', 'Описание': 'Помеха на спасброски смерти и сразу же проваливается один спасбросок', 'Лечение': 'Проверка Медицины со СЛ 25', 'Длительность': 'Пока не будет стабилизирован', 'Дополнительно': ''},
    {'Тяжесть': 'Близость смерти', 'd100': '13', 'Тип': 'Разрыв артерии руки', 'Описание': 'Помеха на спасброски смерти', 'Лечение': 'Проверка Медицины со СЛ 20', 'Длительность': 'Пока не будет стабилизирован', 'Дополнительно': ''},
    {'Тяжесть': 'Близость смерти', 'd100': '14', 'Тип': 'Разрыв артерии ноги', 'Описание': 'Проваливается один спасбросок смерти', 'Лечение': 'Проверка Медицины со СЛ 20', 'Длительность': 'Пока не будет стабилизирован', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '15', 'Тип': 'Сломанная спина', 'Описание': 'Вы считаетесь постоянно опутанным, вы неможете двигать мускулами ниже шеи', 'Лечение': 'Высшее восстановление или заклинания лечения 6 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '16', 'Тип': 'Разрыв мышц', 'Описание': 'Помеха на проверки Силы и броски атак, зависящих от Силы', 'Лечение': 'Заклинание лечения 5 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '17', 'Тип': 'Разрыв сухожилий', 'Описание': 'Помеха на проверки Ловкости и броски атак, зависящих от Ловкости', 'Лечение': 'Заклинание лечения 5 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '18', 'Тип': 'Сломанная рука', 'Описание': 'Можно пользоваться только одной рукой, чтобы использовать предметы/оружие', 'Лечение': 'Заклинание лечения 4 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '19', 'Тип': 'Сломанная нога', 'Описание': 'Чтобы передвинуться больше чем на 10фт в ход, требуется проверка Акробатики со СЛ 15, иначе упасть ничком', 'Лечение': 'Заклинание лечения 4 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '20', 'Тип': 'Внутреннее кровотечение', 'Описание': 'Каждый час ваш максимум ОЗ уменьшается на 1', 'Лечение': 'Заклинание лечения 4 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '21', 'Тип': 'Поврежденное легкое', 'Описание': 'Накладывает один уровень истощения. Эффект не пропадает после продолжительного отдыха', 'Лечение': 'Заклинание лечения 4 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '22', 'Тип': 'Сломанное ребро', 'Описание': 'Вы должны совершить спасбросок Телосложения. При провале в свой ход вы можете совершить либо бонусное действие, либо основное действие.', 'Лечение': 'Заклинание лечения 4 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Серьезное ранение', 'd100': '23', 'Тип': 'Перелом позвоночника', 'Описание': 'Вы считаетесь постоянно опутанным, вы не можете двигать мускулами ниже шеи', 'Лечение': 'Малое восстановление или заклинание лечения 4 уровня', 'Длительность': '2d8 недель', 'Дополнительно': 'Малое восстановление снимает эффект "парализован"'},
    {'Тяжесть': 'Серьезное ранение', 'd100': '24', 'Тип': 'Повреждение почки', 'Описание': 'После того как вы совершили действие, совершите спасбросок Телосложения со СЛ 15. При провале вы падаете ничком', 'Лечение': 'Заклинание лечения 4 уровня', 'Длительность': '2d8 недель', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '25', 'Тип': 'Серьезное сострясение мозга', 'Описание': 'Помеха на спасброски ТЕЛ. для поддержания концентрации. Поддержание заклинания требует спасброск ТЕЛ. со СЛ 10 в конце каждого хода', 'Лечение': 'Заклинание лечения 4 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '26', 'Тип': 'Разрыв яремной вены', 'Описание': 'Невозможно говорить', 'Лечение': 'Малое восстановление или заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '27', 'Тип': 'Разрыв печени', 'Описание': 'Постоянное состояние отравления', 'Лечение': 'Малое восстановление или заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '28', 'Тип': 'Сломанная коленная чашечка', 'Описание': 'Скорость движение делится пополам. Чтобы прыгнуть или сделать рывок, необходимо совершить спасбросок ТЕЛ. со СЛ15, при провале упасть ничком', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '29', 'Тип': 'Сильное сострясение мозга', 'Описание': 'Поддержание заклинания требует спасбросок ТЕЛ. со СЛ 10 в конце каждого хода', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '30', 'Тип': 'Растяжение мышц', 'Описание': 'Помеха на проверки Силы и броски атак, зависящих от Силы', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '31', 'Тип': 'Растяжение сухожилий', 'Описание': 'Помеха на проверки Ловкости и броски атак, зависящих от Ловкости', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '32', 'Тип': 'Перелом руки', 'Описание': 'Нельзя использовать двуручное оружие или лук', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '33', 'Тип': 'Перелом ноги', 'Описание': 'Скорость движение делится пополам', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Сильное ранение', 'd100': '34', 'Тип': 'Разрыв кишечника', 'Описание': 'Совершая атаку или рывок, получите1d6 рубящего урона', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '2d6 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '35', 'Тип': 'Сотрясение мозга', 'Описание': 'Поддержание заклинания требует спасбросок ТЕЛ. со СЛ 10 в конце каждого хода', 'Лечение': 'Заклинание лечения 3 уровня', 'Длительность': '1d4 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '36', 'Тип': 'Легкое сотрясение', 'Описание': 'Помеха на проверку Внимательности', 'Лечение': 'Заклинание лечения 2 уровня', 'Длительность': '1d4 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '37', 'Тип': 'Сломанный нос', 'Описание': 'Помеха на проверку Внимательности, при попытке почуять кого-либо/что-либо', 'Лечение': 'Заклинание лечения 2 уровня', 'Длительность': '1d4 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '38', 'Тип': 'Кровоточащий кишечник', 'Описание': 'После того, как вы атаковали, совершите спасбросок ТЕЛ. со СЛ 10. При провале падаете без сознания', 'Лечение': 'Заклинание лечения 2 уровня', 'Длительность': '1d4 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '39', 'Тип': 'Ушиб почки', 'Описание': 'После того, как вы атаковали, совершите спасбросок ТЕЛ. со СЛ 10. При провале падаете ничком', 'Лечение': 'Заклинание лечения 2 уровня', 'Длительность': '1d4 дней', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '40', 'Тип': 'Защемление нерва в спине', 'Описание': 'Вы Парализованы', 'Лечение': 'Малое восстановление или заклинание лечения 3 уровня', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '41', 'Тип': 'Ушиб печени', 'Описание': 'Вы Отравлены', 'Лечение': 'Малое восстановление или заклинание лечения 3 уровня', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '42', 'Тип': 'Помутнение зрения', 'Описание': 'Вы Ослеплены', 'Лечение': 'Малое восстановление', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '43', 'Тип': 'Глухота', 'Описание': 'Вы Оглушены', 'Лечение': 'Малое восстановление', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '44', 'Тип': 'Ушиб ребра', 'Описание': 'Когда вы совершаете реакцию, совершите спасбросок ТЕЛ. со СЛ 12, при провале ваша реакция отменяется и тратится', 'Лечение': 'Заклинание лечения', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '45', 'Тип': 'Открытая рана', 'Описание': 'Пока вы находитесь в сознании, получайте 1d6 рубящего урона в конце каждого хода', 'Лечение': 'Заклинание лечения', 'Длительность': 'Продолжительный отдых', 'Дополнительно': 'Провал не расходует ячейку'},
    {'Тяжесть': 'Ранение', 'd100': '46', 'Тип': 'Растяжение запястья', 'Описание': 'При использовании заклинания, требующего соматический элемент, совершите спасбросок Телосложения со СЛ. 10, иначе заклинание не совершается', 'Лечение': 'Заклинание лечения', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '47', 'Тип': 'Растяжение лодыжки', 'Описание': 'Скорость передвижения уменьшена вдвое. При использовании рывка совершите проверку Акробатики со СЛ. 15, иначе вы падаете ничком', 'Лечение': 'Заклинание лечения', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '48', 'Тип': 'Растяжение бецепса', 'Описание': 'Помеха на все броски, связанные с состоянием "схваченный"', 'Лечение': 'Заклинание лечения', 'Длительность': 'Продолжительный отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Ранение', 'd100': '49', 'Тип': 'Растяжение бедра', 'Описание': 'Помехи на все спасброски против опрокидывания. Если кто-то перемещает вас против вашей воли, совершите спасбросок ЛОВ, при провале вы падаете ничком', 'Лечение': 'Заклинание лечения', 'Длительность': 'Продолжительный отдых', 'Дополнительно': 'Спасбросок Ловкости на усмотрение ДМа'},
    {'Тяжесть': 'Тяжелая психологическая травма', 'd100': '50', 'Тип': 'Новая фобия', 'Описание': 'При следующей стычке с таким же врагом совершите спасбросок Мудрости со СЛ. 10, иначе вы напуганы', 'Лечение': 'Проверка Медицины со СЛ 25', 'Длительность': 'Пока не вылечитесь', 'Дополнительно': 'Одна проверка медицины в день'},
    {'Тяжесть': 'Тяжелая психологическая травма', 'd100': '51', 'Тип': 'Глубокая депрессия', 'Описание': 'Помеха на спасбросок Мудрости', 'Лечение': 'Проверка Медицины со СЛ 20', 'Длительность': 'Пока не вылечитесь', 'Дополнительно': 'Одна проверка медицины в день'},
    {'Тяжесть': 'Тяжелая психологическая травма', 'd100': '52', 'Тип': 'Бессоница', 'Описание': 'Совершайте спасбросок Мудрости со СЛ. 15 перед каждым продолжительным отдыхом, иначе по окончанию вы получите уровень истощения', 'Лечение': 'Проверка Медицины со СЛ 20', 'Длительность': 'Пока не вылечитесь', 'Дополнительно': 'Одна проверка медицины в день'},
    {'Тяжесть': 'Тяжелая психологическая травма', 'd100': '53', 'Тип': 'Ночные кошмары', 'Описание': 'Совершайте спасбросок Мудрости со СЛ. 12 перед каждым продолжительным отдыхом, иначе по окончанию вы получите уровень истощения', 'Лечение': 'Проверка Медицины со СЛ 20', 'Длительность': 'Пока не вылечитесь', 'Дополнительно': 'Одна проверка медицины в день'},
    {'Тяжесть': 'Тяжелая психологическая травма', 'd100': '54', 'Тип': 'Алкоголизм', 'Описание': 'Теперь вы алкоголик :)', 'Лечение': 'Проверка Медицины со СЛ 20', 'Длительность': 'Пока не вылечитесь', 'Дополнительно': 'Одна проверка медицины в день'},
    {'Тяжесть': 'Психологическая травма', 'd100': '55', 'Тип': 'Амнезия', 'Описание': 'После боя вы с трудом можете вспомнить, что происходило в нем', 'Лечение': '-', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '56', 'Тип': 'Кататония', 'Описание': 'Ваша скорость снижается до 0, вы не можете совершать никакие действия и реакции кроме как проверки Медицины на себя', 'Лечение': '-', 'Длительность': 'Короткий отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '57', 'Тип': 'Бегство', 'Описание': 'Совершите спасбросок Мудрости со Сл. 15, иначе вы обращаетесь в бегство от всех врагов, пока не будите  вполном укрытии', 'Лечение': '-', 'Длительность': 'Короткий отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '58', 'Тип': 'Депрессия', 'Описание': 'Помеха на спасбросок Мудрости', 'Лечение': '-', 'Длительность': 'Короткий отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '59', 'Тип': 'Некотролируемая дрожь', 'Описание': 'Помеха на спасбросок Ловкости', 'Лечение': '-', 'Длительность': 'Короткий отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '60', 'Тип': 'Нервное подергивание', 'Описание': 'В конце вашего хода совершайте спасбросок Силы со СЛ. 12, иначе вы роняете предмет в ваших руках', 'Лечение': '-', 'Длительность': 'Короткий отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '61', 'Тип': 'Ступор', 'Описание': 'В начале вашего хода совершайте спасброски Мудрости со СЛ. 15, иначе ваша скорость передвижения падает до 0', 'Лечение': '-', 'Длительность': 'Короткий отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '62', 'Тип': 'Паранойя', 'Описание': 'В начале вашего хода совершайте спасброски Мудрости со СЛ. 12, иначе вы атакуете ближайшее к вам существо в радиусе досягаемости', 'Лечение': '-', 'Длительность': 'Короткий отдых', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '63', 'Тип': 'Укрытие', 'Описание': 'Совершите спасброски Мудрости со СЛ. 15, иначе вы используете рывок и двигаетесь как можно дальше от боя', 'Лечение': '-', 'Длительность': '1 раунд', 'Дополнительно': ''},
    {'Тяжесть': 'Психологическая травма', 'd100': '64', 'Тип': 'Берсерк', 'Описание': 'Совершите спасброски Мудрости со СЛ. 12, иначе вы атакуете ближайшее к вам существо в радиусе досягаемости', 'Лечение': '-', 'Длительность': '1 раунд', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '65', 'Тип': 'Растяжение бедра', 'Описание': 'Скорость передвижения снижена на 10 фт.', 'Лечение': 'Заклинание лечения', 'Длительность': '1 минута', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '66', 'Тип': 'Хромота', 'Описание': 'Скорость передвижения снижена на 5 фт.', 'Лечение': '', 'Длительность': 'Заклинание лечения1 минута', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '67', 'Тип': 'Звон в ушах', 'Описание': 'Помехи на проверки Восприятие, связанные со слухом', 'Лечение': 'Заклинание лечения', 'Длительность': '1 минута', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '68', 'Тип': 'Прикушенный язык', 'Описание': 'Не можете говорить', 'Лечение': 'Заклинание лечения', 'Длительность': '1 минута', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '69', 'Тип': 'Удар в промежность', 'Описание': 'Когда в сознании, в начале каждого своего хода совершайте спасбросок Телосложения со СЛ. 15, иначе ваша скорость опускается до 0', 'Лечение': 'Ситуативно', 'Длительность': '1 минута', 'Дополнительно': 'При успехе эффект пропадает'},
    {'Тяжесть': 'Незначительный шрам', 'd100': '70', 'Тип': 'Болезненный шрам', 'Описание': 'Когда вы используете реакцию, совершите спасбросок Телосложения со СЛ. 10. При провале вы тратите реакцию впустую', 'Лечение': 'Заклинание лечения', 'Длительность': '1 минута', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '71', 'Тип': 'Головная боль', 'Описание': 'Помеха на концентрацию заклинаний', 'Лечение': 'Заклинание лечения', 'Длительность': '1 минута', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '72', 'Тип': 'Вывих плеча', 'Описание': 'Модификатор -2 ко всем броскам атаки', 'Лечение': 'Проверка Медицины со СЛ 15', 'Длительность': 'Пока не вылечится', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '73', 'Тип': 'Вывих пальца', 'Описание': 'Модификатор -2 ко всем броскам атаки', 'Лечение': 'Проверка Медицины со СЛ 10', 'Длительность': 'Пока не вылечится', 'Дополнительно': ''},
    {'Тяжесть': 'Незначительный шрам', 'd100': '74', 'Тип': 'Кровь в глазах', 'Описание': 'Помеха на проверки Восприятие, в которых задействуется зрение, а также на все дальнобойные атаки', 'Лечение': 'Проверка Медицины со СЛ 5', 'Длительность': 'Пока не вылечится', 'Дополнительно': 'Как альтернатива, пока не вылечится фокусами'},
    {'Тяжесть': 'Нейтральный эффект', 'd100': '75', 'Тип': 'Разорванная одежда', 'Описание': 'Кажется, придется купить новую', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Нейтральный эффект', 'd100': '76', 'Тип': 'Стрижка', 'Описание': 'Новая крутая стрижка', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Нейтральный эффект', 'd100': '77', 'Тип': 'Небольшой шрам на теле', 'Описание': 'Есть чем похвастаться... Если выживешь', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Нейтральный эффект', 'd100': '78', 'Тип': 'Небольшая вмятина на броне', 'Описание': 'Есть чем похвастаться... Если выживешь', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Специальный эффект', 'd100': '79', 'Тип': 'Предусмотрительность', 'Описание': 'Своим телом вы закрываете все ваши ценности. Требуется Проверка Ловкости Рук со СЛ 15, чтобы забрать ваши вещи, пока вы лежите без сознания.', 'Лечение': '', 'Длительность': 'Пока не в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Специальный эффект', 'd100': '80', 'Тип': 'Сломанный предмет', 'Описание': 'Случайное зелье или немагический предмет из вашего инвентаря ломается', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Специальный эффект', 'd100': '81', 'Тип': 'Активация магического предмета', 'Описание': 'Случайный магический предмет, на который вы настроены или который есть у вас в рюкзаке, активируется', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Специальный эффект', 'd100': '82', 'Тип': 'Мышечная память', 'Описание': 'Пока вы без сознания, союзник может напоить вас зельем, используя реакцией', 'Лечение': '', 'Длительность': 'Пока не в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Специальный эффект', 'd100': '83', 'Тип': 'Динамическая защита', 'Описание': 'Если вы носите броню, то атакующий получает 1d8 колющего урона', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': 'Например, осколки вашей брони'},
    {'Тяжесть': 'Специальный эффект', 'd100': '84', 'Тип': 'Смертельный захват', 'Описание': 'Совершите захват по атакующему. При успехе он повален вместе с вами', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Небольшой бонус', 'd100': '85', 'Тип': 'Помнишь меня?', 'Описание': 'У вас есть преимущество на атаку по существу, которое сделало это с вами', 'Лечение': '', 'Длительность': 'До следующего короткого/продолжительного отдыха', 'Дополнительно': ''},
    {'Тяжесть': 'Небольшой бонус', 'd100': '86', 'Тип': 'Я думал, что ты мертв', 'Описание': 'Существо, которое атаковало вас теперь будет иметь помеху на все следующие атаки по вам', 'Лечение': '', 'Длительность': 'До следующего короткого/продолжительного отдыха', 'Дополнительно': ''},
    {'Тяжесть': 'Небольшой бонус', 'd100': '87', 'Тип': 'Уверенное возвращение', 'Описание': 'Следующая атака по вам будет совершаться с помехой', 'Лечение': '', 'Длительность': 'До следующего короткого/продолжительного отдыха', 'Дополнительно': ''},
    {'Тяжесть': 'Небольшой бонус', 'd100': '88', 'Тип': 'Глаз алмаз', 'Описание': 'Следующую атаку вы проводите с преимуществом', 'Лечение': '', 'Длительность': 'До следующего короткого/продолжительного отдыха', 'Дополнительно': ''},
    {'Тяжесть': 'Небольшой бонус', 'd100': '89', 'Тип': 'Готов ко второму раунду', 'Описание': 'Вы имеете преимущество на следующий спасбросок', 'Лечение': '', 'Длительность': 'До следующего короткого/продолжительного отдыха', 'Дополнительно': ''},
    {'Тяжесть': 'Памятные шрамы', 'd100': '90', 'Тип': 'Памятный шрам на теле', 'Описание': 'Преимущество при проверках Запугивания', 'Лечение': '', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Памятные шрамы', 'd100': '91', 'Тип': 'Впечатляющий шрам на теле', 'Описание': 'Преимущество при проверках Запугивания и Убеждения', 'Лечение': '', 'Длительность': 'Навсегда', 'Дополнительно': ''},
    {'Тяжесть': 'Памятные шрамы', 'd100': '92', 'Тип': 'Впечатляющий шрам на броне', 'Описание': 'Преимущество при проверках Запугивания и Убеждения', 'Лечение': '', 'Длительность': 'Навсегда', 'Дополнительно': 'Должна быть надета эта броня'},
    {'Тяжесть': 'Живучесть', 'd100': '93', 'Тип': 'Преувеличенная рана', 'Описание': 'Тот, кто атаковал вас думает, что все кончено. Он не будет атаковать вас, пока вы не придете в себя', 'Лечение': '', 'Длительность': 'Пока не в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Живучесть', 'd100': '94', 'Тип': 'Преувеличенная рана+', 'Описание': 'Враги думают, что все кончено. Они не будет атаковать вас, пока вы не придете в себя', 'Лечение': '', 'Длительность': 'Пока не в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Живучесть', 'd100': '95', 'Тип': 'Второе дыхание-', 'Описание': 'Начните с одного успешного спасброска смерти', 'Лечение': 'Пока не стабилизирован или не в сознании', 'Длительность': '', 'Дополнительно': ''},
    {'Тяжесть': 'Живучесть', 'd100': '96', 'Тип': 'Второе дыхание', 'Описание': 'Преимущество на спасброски смерти', 'Лечение': '', 'Длительность': 'Пока не стабилизирован или не в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Живучесть', 'd100': '97', 'Тип': 'Второе дыхание+', 'Описание': 'Начните с одного успешного спасброска смерти и преимуществом на спасброски от смерти', 'Лечение': '', 'Длительность': 'Пока не стабилизирован или не в сознании', 'Дополнительно': ''},
    {'Тяжесть': 'Живучесть+', 'd100': '98', 'Тип': 'Неожиданный нокаут', 'Описание': 'Вы стабилизируетесь после одного удачного спасброска смерти', 'Лечение': '', 'Длительность': 'До стабилизации', 'Дополнительно': ''},
    {'Тяжесть': 'Живучесть+', 'd100': '99', 'Тип': 'Неожиданный нокаут+', 'Описание': 'Вы стабилизированы', 'Лечение': '', 'Длительность': 'Моментально', 'Дополнительно': ''},
    {'Тяжесть': 'Железная воля', 'd100': '100', 'Тип': 'Прилив адреналина', 'Описание': 'В начале вашего следующего хода, вы лечите 1 кость хитов + модификатор Телосложения', 'Лечение': '', 'Длительность': 'До вашего хода', 'Дополнительно': 'Вы возвращаетесь в бой, но лежите ничком'}
]

let table = document.getElementById("injuryTable");
let random = document.getElementById("random");

for (let i = 0; i < injury.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = "<td>" + injury[i]["Тяжесть"] + "</td><td>" + injury[i]["d100"] + "</td><td>" + injury[i]["Тип"] + "</td><td>" + injury[i]["Описание"] + "</td><td>" + injury[i]["Лечение"] + "</td><td>" + injury[i]["Длительность"] + "</td><td>" + injury[i]["Дополнительно"] + "</td>";
    table.appendChild(tr);
}

document.getElementById("text").addEventListener("keyup", function(e) {if (e.code == "Enter") ChooseInjury()})

function RandomInjury()
{
    i = Math.floor(Math.random() * injury.length);
    random.innerHTML = "<td>" + injury[i]["Тяжесть"] + "</td><td>" + injury[i]["d100"] + "</td><td>" + injury[i]["Тип"] + "</td><td>" + injury[i]["Описание"] + "</td><td>" + injury[i]["Лечение"] + "</td><td>" + injury[i]["Длительность"] + "</td><td>" + injury[i]["Дополнительно"] + "</td>";
}

function ChooseInjury()
{
    i = document.getElementById("text").value - 1;
    random.innerHTML = "<td>" + injury[i]["Тяжесть"] + "</td><td>" + injury[i]["d100"] + "</td><td>" + injury[i]["Тип"] + "</td><td>" + injury[i]["Описание"] + "</td><td>" + injury[i]["Лечение"] + "</td><td>" + injury[i]["Длительность"] + "</td><td>" + injury[i]["Дополнительно"] + "</td>";
}