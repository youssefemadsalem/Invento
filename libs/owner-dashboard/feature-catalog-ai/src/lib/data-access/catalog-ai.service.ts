import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CatalogApplyRequest,
  CatalogApplyResponse,
  CatalogGenerationRequest,
  CatalogGenerationResponse,
} from './catalog-ai.model';

import { AUTH_CONFIG } from '@invento/shared-data-access-auth';

@Injectable({
  providedIn: 'root',
})
export class CatalogAiService {
  private http = inject(HttpClient);
  private readonly basePath = `${inject(AUTH_CONFIG).apiBaseUrl}/catalog`;

  generateCatalog(request: CatalogGenerationRequest): Observable<CatalogGenerationResponse> {
    return this.http.post<CatalogGenerationResponse>(`${this.basePath}/generate`, request);
  }

  applyCatalog(request: CatalogApplyRequest): Observable<CatalogApplyResponse> {
    return this.http.post<CatalogApplyResponse>(`${this.basePath}/apply`, request);
  }
}
