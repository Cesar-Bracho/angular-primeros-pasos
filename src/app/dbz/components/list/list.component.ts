import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power: 100
  }];

  //onDelete = Index value:number
  // public onDelete: EventEmitter<number> = new EventEmitter();
  // public onDelete = new EventEmitter<number>();
  @Output()
  public onDelete = new EventEmitter<string>();

  // public onDeleteCharacter(index: number): void {
  public onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    // console.log({ index });
    // this.onDelete.emit(index);
    if (!id) return;
    this.onDelete.emit(id);
  }
}
