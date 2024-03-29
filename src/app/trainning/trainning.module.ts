import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { trainingReducer } from './store/training.reducer';

import { CurrentTrainningComponent } from './current-trainning/current-trainning.component';
import { StopTrainningDialogComponent } from './current-trainning/stop-trainning-dialog.component';
import { NewTrainningComponent } from './new-trainning/new-trainning.component';
import { PastTrainningsComponent } from './past-trainnings/past-trainnings.component';
import { TrainningRoutingModule } from './trainning-routing.module';
import { TrainningComponent } from './trainning.component';

@NgModule({
  declarations: [
    TrainningComponent,
    CurrentTrainningComponent,
    NewTrainningComponent,
    PastTrainningsComponent,
    StopTrainningDialogComponent,
  ],
  imports: [
    SharedModule,
    TrainningRoutingModule,
    StoreModule.forFeature('training', trainingReducer),
  ],
  exports: [],
  entryComponents: [StopTrainningDialogComponent],
})
export class TrainningModule {}
