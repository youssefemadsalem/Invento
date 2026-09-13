import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmP } from '@spartan/helm/typography';
import { TranslatePipe } from '@invento/shared-util-i18n';

@Component({
  selector: 'app-not-found',
  imports: [HlmP, TranslatePipe],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {}
