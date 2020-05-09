import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent {

  @Input() dropdownLabel: string = 'Dropdown label'; 
  @Input() dropdownOptions: any = ['Option 1', 'Option 2', 'Option 3'];
  @Input() dropdownOptionDefault?: string; 

  @Output('selectChange') optionSelected: EventEmitter<string> = new EventEmitter<string>();

  form = new FormGroup({
    dropdown: new FormControl('', Validators.required)
  });
  
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.ref.detectChanges();
    this.form.controls['dropdown'].setValue(this.dropdownOptionDefault);
  }   
  
  get f(){
    return this.form.controls;
  }

  changeOption(e) {
    this.optionSelected.emit(e.target.value);
  }

}
