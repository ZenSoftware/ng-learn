import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './sample.component.html',
})
export class SampleComponent implements OnInit {
  unsavedChanges = true;
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('recieved data', data['zen']);
    });
  }
}
