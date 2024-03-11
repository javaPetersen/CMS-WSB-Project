## WERSJA NODE
Musimy użyć node w wersji >= 18.13.0
Najlepiej zainstalować sobie Node Version Manager:
- linux/WSL https://github.com/nvm-sh/nvm
- windows https://github.com/coreybutler/nvm-windows

## INSTALACJA NODE MODULES
Gdy już mamy odpowiednią wersję npm, mozemy w naszym głównym folderze zainstalować moduły:
``` 
nvm use 18.13.0
npm i 
 ```
Pierwsza komenda nakazuje korzystanie z wersji 18.13.0 (jeżeli 18.13.0 jest naszą jedyną wersją lub ustawioną na default, to możemy pominąć ten krok).
Druga komenda instaluje moduły, może to chwile zająć.

## INSTALACJA ANGULARA
Na sam koniec musimy zainstalować Angular
```
npm install -g @angular/cli
```

## URUCHOMIENIE APKI
Gdy mamy zainstalowane modules, możemy przystąpić do uruchomienia naszej aplikacji.
Możemy zrobić na kilka sposobów:
1. Poprzez IDE
   - Gdy otworzymy nasz projekt w WebStorm/VSCode to powinna nam się pojawić opcja na liście  
![run-app-ide.png](docs-images%2Frun-app-ide.png)
   - A jeżeli nie, to możemy odnaleźć plik package.json (dwa razy lefy shift i wpisujemy package.json) i przy start klikamy ikonkę start (będziemy musieli w oknie dialogowym podać mu wersje node 18.13.0)
![package-json.png](docs-images%2Fpackage-json.png)
2. Poprzez terminal
  - będąc w terminalu w głównym folderze naszej frontendowej apki możemy wywołać komendę ``` ng serve ```

O tym że nasza apka wstała będzie świadczył komunikat:
![running-app.png](docs-images%2Frunning-app.png)

I klikając w link w Local możemy przejść w przeglądarce do naszej apki.
