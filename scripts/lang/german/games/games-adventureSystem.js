$.lang.register('adventuresystem.adventure.usage', 'Verwendung: !adventure [$1].');
$.lang.register('adventuresystem.alreadyjoined', 'Du bist dem Abenteuer bereits beigetreten.');
$.lang.register('adventuresystem.completed', 'Das Abenteuer ist beendet, Überlebende: $1.');
$.lang.register('adventuresystem.completed.no.win', 'Das Abenteuer ist beendet. Es hat niemand überlebt.');
$.lang.register('adventuresystem.completed.win.total', 'Das Abenteuer wurde mit $1 Überlebenden und $2 Toten beendet.');
$.lang.register('adventuresystem.join.bettoohigh', 'Du kannst mit, $1, nicht einsteigen, das Maximum ist $2.');
$.lang.register('adventuresystem.join.bettoolow', 'Du kannst mit, $1, nicht einsteigen, das Minimum ist $2.');
$.lang.register('adventuresystem.join.needpoints', 'Du kannst mit, $1, nicht einsteigen, du hast nur $2.');
$.lang.register('adventuresystem.join.notpossible', 'Du kannst jetzt nicht beitreten.');
$.lang.register('adventuresystem.join.success', 'Du bist dem Abenteuer mit $1 beigetreten!');
$.lang.register('adventuresystem.loaded', 'Abenteuergeschichten geladen ($1 gefunden).');
$.lang.register('adventuresystem.payoutwhisper', 'Abenteuer abgeschlossen, $1 + $2, wurden deinem Guthaben gutgeschrieben.');
$.lang.register('adventuresystem.runstory', 'Starte Abenteuer "$1" mit $2 Spieler(n).');
$.lang.register('adventuresystem.set.success', '$1 zu $2 gesetzt.');
$.lang.register('adventuresystem.set.usage', 'Verwendung: !adventure set [settingname] [value].');
$.lang.register('adventuresystem.start.success', '$1 versucht ein Team für ein großes Abenteuer zusammen zu stellen. Verwende "!adventure [$2]" um beizutreten!');
$.lang.register('adventuresystem.tamagotchijoined', '$1 tritt auch dem Abenteuer bei.');
$.lang.register('adventuresystem.top5', 'Die Top 5 Abenteurer sind: $1.');
$.lang.register('adventuresystem.top5.empty', 'Es wurden noch keine Abenteuer Gewinner verzeichnet.');
$.lang.register('adventuresystem.reset', 'Es wird wieder Zeit für ein neues Abenteuer! Schreibe "!adventure [$1]" um ein neues Abenteuer zu starten!!');


$.lang.register('adventuresystem.stories.1.title', 'Schatz im Schwarzsee');
$.lang.register('adventuresystem.stories.1.chapter.1', 'Nach jahrelangen Recherchen habe ich die Gewissheit, dass der Schatz im Schwarzsee keine Legende ist, er existiert wirklich! Lasst uns sofort aufbrechen und ihn den Tiefen entreissen.');
$.lang.register('adventuresystem.stories.1.chapter.2', 'In den Tiefen des Sees gab es mehr als nur Fische und Muscheln. Seltsame Unterwassergeschöpfe wachen scheinbar über den Schatz. (caught) war(en) diesen Wesen nicht gewachsen und wurde(n) von ihnen getötet.');
$.lang.register('adventuresystem.stories.1.chapter.3', '(survivors) schaffte(n) es zurück an das Ufer, beladen mit außergewöhnlichen Schätzen. Die Freude dieses Abenteuer überlebt und den Schatz gehoben zu haben ist überwältigend.');

$.lang.register('adventuresystem.stories.2.title', 'Der Elfenschatz');
$.lang.register('adventuresystem.stories.2.chapter.1', 'Freunde! Ich habe die Koordinaten für ein geheimes Schatzversteck der Elfen, tief im Elfenwald, bekommen. Wir sollten uns das unbedingt ansehen!');
$.lang.register('adventuresystem.stories.2.chapter.2', 'Vorsicht! Die Elfen haben überall tödliche Fallen versteckt! (caught) hatte(n) Pech und fiel(en) diesen zum Opfer.');
$.lang.register('adventuresystem.stories.2.chapter.3', 'Verdammt, das war knapp! Aber es ist geschafft! (survivors) kehrte(n) mit vollen Taschen zurück!');

$.lang.register('adventuresystem.stories.3.title', 'Draculas Vermächtnis');
$.lang.register('adventuresystem.stories.3.chapter.1', 'Oh, meine lieben Freunde! Ich habe möglicherweise das Abenteuer unseres Lebens gefunden. Nämlich das Schloss des Grafen Dracula, von dem angenommen wird, dass er unermessliche Reichtümer besaß. Ich schlage vor, dass wir sofort aufbrechen!');
$.lang.register('adventuresystem.stories.3.chapter.2', 'Er ist es wahrhaftig! (caught) wurde(n) bestialisch geschlachtet.');
$.lang.register('adventuresystem.stories.3.chapter.3', 'Das war eine knappe Entscheidung, ich glaube nicht, dass ich gebissen wurde. Wie gut, (survivors), hier ist der Versprochene Anteil.  ~Verwandelt sich in eine Fledermaus und flattert davon.~');

$.lang.register('adventuresystem.stories.4.title', 'Mannbärschwein');
$.lang.register('adventuresystem.stories.4.chapter.1', 'Ich denke, wir haben sehr gute Chancen, das sagenumwobene Monster in dieser Höhle zu finden... Es ist zu einem Drittel Mensch, einem Drittel Bär und einem Drittel Schwein. Lacht nicht, ICH MEINE ES TOT ERNST!');
$.lang.register('adventuresystem.stories.4.chapter.2', '/me Als sich der/die Abenteurer seinen/ihren Weg durch die Tunnel bahnt/en, hören sie ein leises Geräusch hinter sich...');
$.lang.register('adventuresystem.stories.4.chapter.3', 'Achtung! Es ist Mannbärschwein! (caught) wurde(n) in die Dunkelheit gezogen und verschwand(en) auf nimmer Wiedersehen.');
$.lang.register('adventuresystem.stories.4.chapter.4', '(survivors), lasst uns hier verschwinden! Wir können es nicht mit ihm aufnehmen!');


/*
 * Rules on writing your own adventure story:
 *
 * - Stories are automatically loaded from this file by their sequence number (adventuresystem.stories.[This number]).
 * - Keep the format of your story as shown above.
 * - There can be an unlimited number of stories, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - A story must have a title.
 * - A story can have an unlimited number of chapters, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - Stories are picked at random.
 *
 ** Game specific story how-to. You also need to make sure that you at least have ONE story that doesn't require a specific game.
 ** Please make sure that your story number also follow along. What I mean by that is it needs to start from 1 and go up. Same with the chapters.
 * - Add $.lang.register('adventuresystem.stories.NUMBER.game', 'GAME NAME IN LOWER CASE'); on top of the story chapter.

 * Example >
 * $.lang.register('adventuresystem.stories.5.game', 'programming');
 * $.lang.register('adventuresystem.stories.5.title', 'Talk Shows');
 * $.lang.register('adventuresystem.stories.5.chapter.1', 'random story...');
 *
 * Underneath is a template for your first custom story, just remove the preceding slashes.
 */

//$.lang.register('adventuresystem.stories.5.title', '');
//$.lang.register('adventuresystem.stories.5.chapter.1', '');
//$.lang.register('adventuresystem.stories.5.chapter.2', '');
//$.lang.register('adventuresystem.stories.5.chapter.3', '');
