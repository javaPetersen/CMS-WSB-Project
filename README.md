# CMS-WSB-Project
Projekt na studia WSB z przedmiotu CMS

![architecture.png](docs-images%2Farchitecture.png)

Mamy dwie opcje, możemy sobie zainstalować bazke na naszym OS i z niej korzystać, lub zainstalować dockera i w kontenerze odpalić sobie bazke bez instalacji.


# SOFTWARE STACK

## Docker
Instalacja dockera: 

https://docs.docker.com/engine/install/ 

na Windowsie zainstaluje się wam Docker Desktop, czyli apka która pozwala przeglądać obrazy.

Podstawowe komendy dockera (DOCKER CHEAT SHEET):

https://docs.docker.com/get-started/docker_cheatsheet.pdf


## Baza danych MongoDB
Jako naszą główną bazę danych używać będziemy MongoDB, jest to nierelacyjna, dokumentowa baza danych, która ułatwi nam troche życie.

https://www.mongodb.com/docs/manual/introduction/


## Backend (Python Django)
TODO

## Frontend (Angular)
Nasz frontend będzie tworzony w Angularze. Więcej informacji w README.md w folderze frontend/cms-frontend.


# Stawianie środowiska lokalnego

## Uruchamianie bazy danych z Dockera
- Bazę odpalamy przy użyciu przygotowanego w głównym folderze projektu docker-compose.yml poprzez wywołanie komendy w terminalu:

``` docker-compose up ``` 

- lub możemy skorzystać ze skryptu startAll.sh, który docelowo będzie przebudowywał wszystkie nasze komponenty i uruchamiał całe środowisko w kontenerach.
- Gdyby próba wywołania skryptu zwróciła komunikat jak na poniższym screenie (brak permission do wykonywania skryptu) o musimy wywołać w terminalu komendę:``` chmod +x startAll.sh ```

    ![script-permission-denied.png](docs-images%2Fscript-permission-denied.png) 



- Po wykonaniu skryptu możemy komendą ``` docker ps ``` sprawdzić czy nasz kontener wstał i żyje (jeśli wyświetla się na liście to je gicior)

    ![docker-ps.png](docs-images%2Fdocker-ps.png)

- Baza działa na localhost na porcie 27017, passy:
- domyślny username: ```superuser```
- domyślny password: ```superpassword123```
- Możemy sobie nadpisać domyślne passy poprzez ustawienie zmiennych środowiskowych o nazwach:
> CMD_DB_USERNAME \
> CMD_DB_PASSWORD
- Wtedy docker automatycznie je wykryje i użyje w bazie danych


## Podgląd bazy w pluginie IntelliJ
Jeżeli używamy wersji Intellij/PyCharm/WebStorm Ultimate (a jako studenci mamy darmowe licencje do wszystkich tych narzędzi),
to po prawej stronie mamy ikonkę bazy danych. Po jej kliknięciu rozwija się panel, w którym po kliknięciu przycisku ```+```
z listy rozwijanej możemy wybrać ```DataSource``` i na liście znaleźć ```MongoDB```.

![database-plugin.png](docs-images%2Fdatabase-plugin.png)

Na ekranie wypełniamy dane: host, port, username, password i klikamy Test Connection. (może pojawić się komunikat o braku Drivera do bazy danych, nalezy go pobrać)
Jeśli otrzymamy komunikat że połączenie udane, klikamy Apply, OK i możemy po prawej stronie wybrać odpowiednią schemę i ją podejrzeć.


# PRACA Z GITEM

Naszym głównym branchem rozwojowym jest ```develop``` i to do niego merdżujemy wszystkie zmiany.
Klonując repozytorium zaczniemy prace na tym branchu.

Pracując nad nową funkcjonalnością powinniśmy odbijać nowy branch od developa:

> git checkout -b ***nazwa_brancha***

nazwa brancha powinna w mniejszym lub większym stopniu opisywać daną funkcjonalność.
Takie odbicie brancha tworzy nam kopie developa na osobnej gałęzi. Jeżeli chcemy sprawdzić czy na pewno się przełączyliśmy możemy
użyć komendy:

> git branch

Która pokaże nam wszystkie nasze branche i wskaże który jest aktywny.

Gdy kończymy nasze prace nad funkcjonalnością musimy pamiętać, żeby scommitować nasze zmiany. By śledzić
zmiany możemy użyć pluginu z naszego IDE, które znajduje się po lewej stronie ekranu.

![intellij-git.png](docs-images%2Fintellij-git.png)

Zaznaczamy pliki które chcemy scommitować, w polu message wpisujemy opis naszych zmian. Klikamy commit and push.
Gdy zpushujemy zmiany do repo, musimy przejsc na strone github i odpalić Pull Request.
Aby można było zmerdżować Pull Request musimy mieć review i approve od jednej osoby, jeśli Reviewer zatwierdzi nasze zmiany, to możemy kliknąć Merge Pull Request.

Po zmerdżowaniu zmian w naszym IDE przepinamy się na brancha develop.

> git checkout develop

a następnie ściągamy najnowsze zmiany

> git pull

Gdy mamy aktualnego developa. Odbijamy kolejnego brancha i kodujemy nowy feature ;)